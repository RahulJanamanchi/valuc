import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy, Input, HostListener } from '@angular/core';
import 'webrtc-adapter/out/adapter_no_global';
import { debounce } from 'lodash-es';
import jsQR from 'jsqr';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})
export class WebcamComponent implements OnInit, OnDestroy {

  @Input() type: string;
  @Output() scan = new EventEmitter<ImageData | string>();
  @Output() error = new EventEmitter<string>();
  @Output() back = new EventEmitter<any>();
  // @ViewChild('canvas')
  canvas = document.createElement('canvas');
  // @ViewChild('canvasOverlay') canvasOverlay: ElementRef;
  @ViewChild('video') video: ElementRef;
  public flash = false;
  private width: number;
  private height: number;
  private stream: any;
  private streamingStopped = false;
  private raf: number;

  @HostListener('window:resize')
  handleResize = debounce(() => {
    this.stop();
    this.start();
  }, 500);

  constructor() { }

  ngOnInit() {
    this.start();
  }

  ngOnDestroy() {
    this.stop();
  }

  getElements() {
    return {
      canvas: this.canvas,
      // canvasOverlay: this.canvasOverlay.nativeElement,
      video: this.video.nativeElement
    };
  }

  start() {
    this.reset();
    // this.drawOverlay();
    this.play();
  }

  reset() {
    const { canvas,  video } = this.getElements();
    const main = video.parentNode;
    this.width = canvas.width =  video.width = main.offsetWidth;
    this.height = canvas.height =  video.height = main.offsetHeight;
  }

  // drawOverlay() {
  //   // const { canvasOverlay } = this.getElements();
  //   const canvasWidth = canvasOverlay.width;
  //   // for footer tab 82px
  //   const canvasHeight = canvasOverlay.height - 82;
  //   const scanAreaSize = 200;
  //   const x = canvasWidth / 2 - scanAreaSize / 2;
  //   const y = canvasHeight / 2 - scanAreaSize / 2;
  //   const ctx = canvasOverlay.getContext('2d');
  //   // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  //   // ctx.globalCompositeOperation = 'source-out';
  //   // ctx.fillStyle = '#000';
  //   // drawRoundRect(ctx, x, y, scanAreaSize, scanAreaSize, 30);
  //   ctx.fill();
  //   ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
  //   // ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  // }

  
  async play() {
    
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter(device => device.kind === 'videoinput');
    console.log("devices===>",devices);
    console.log("camera--->",cameras);
    
    try {
      if (!cameras.length) throw new Error('Camera not found!');
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: this.width,
          height: this.height,
           facingMode: 'environment' },
      });
      const { video } = this.getElements();
      // this.stream = video.srcObject = stream;
      this.stream=stream;
      video.srcObject = stream;
      this.startScanning();
    } catch(err) {
      this.error.emit(err.message);
    }
  }

  startScanning = () => {
    if (this.streamingStopped) return;
    const { canvas, video } = this.getElements();
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      this.canvas.hidden = true;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height,  { inversionAttempts: 'dontInvert'});
        if (code && code.data) {
          this.stop();
          this.scan.emit(imageData);
        }
    }
    if (!this.streamingStopped) {
      this.raf = requestAnimationFrame(this.startScanning);
    }
  }

  stop() {
    this.streamingStopped = true;
    cancelAnimationFrame(this.raf);
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }
  getStyle() {
    return { 'width.px':30, 'height.px':30, 'background-color':'white', 'border-radius':'50px', 'padding':'3px'};

  }

  async switchCamera() {
    if (!this.stream) return;
    const track = this.stream.getVideoTracks()[0];
    const currentMode = track.getSettings().facingMode;
    console.log("current mode==>",currentMode);
    const newMode = currentMode === 'environment' ? 'user' : 'environment';
    console.log("new mode==>",newMode);
    // this.stream.getVideoTracks()[0].applyConstraints({
    //   width: this.width,
    //   height: this.height,
    //   facingMode: newMode
    // });
    console.log(" stream data----->",this.stream.getVideoTracks());
    // track.applyConstraints({
    //   facingMode: newMode
    // });
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
    const { video } = this.getElements();
    const stream1 = await navigator.mediaDevices.getUserMedia({
      video: {
        width: this.width,
        height: this.height,
        facingMode: newMode },
    });
    this.stream = stream1;
    video.srcObject = this.stream;
    console.log("Current stream data****",this.stream.getVideoTracks());
    this.startScanning();
  }

  async toggleFlash(onOrOff) {
    if (!this.stream) return;
    const track = this.stream.getVideoTracks()[0];
    // @ts-ignore
    const imageCapture = new ImageCapture(track);
    const capabilities = await imageCapture.getPhotoCapabilities();
    if (capabilities.torch) {
      this.flash = !onOrOff;
      return track.applyConstraints({ advanced: [{ torch: onOrOff }] });
    }
    this.error.emit('Flash is not supported');
  }

}

function drawRoundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}