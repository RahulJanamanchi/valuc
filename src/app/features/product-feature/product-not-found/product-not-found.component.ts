import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {WrongQRCodeService} from '../../../services/wrong-qr-code.service';

@Component({
  selector: 'app-product-not-found',
  templateUrl: './product-not-found.component.html',
  styleUrls: ['./product-not-found.component.scss']
})
export class ProductNotFoundComponent implements OnInit {

  image: ImageData = new ImageData(150, 150);
  @ViewChild('qrcode') public canvas: ElementRef;
  private cx: CanvasRenderingContext2D;

  setQRImage(image:ImageData){
    this.image = image;
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = this.image.width;
    canvasEl.height = this.image.height;
    this.cx.putImageData(this.image, 0, 0);
  }

  constructor(public router: Router, private route: ActivatedRoute, private wrongQRCode: WrongQRCodeService) {

  }

  ngOnInit() {
    this.wrongQRCode.currentImage
    .subscribe((image: ImageData) => this.setQRImage(image));
  }

  backToScan() {
    this.router.navigate(['/scan']);
  }

}
