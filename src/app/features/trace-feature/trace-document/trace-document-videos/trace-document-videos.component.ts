import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trace-document-videos',
  templateUrl: './trace-document-videos.component.html',
  styleUrls: ['./trace-document-videos.component.scss']
})
export class TraceDocumentVideosComponent implements OnInit {
  @Input() videos : string[];
  constructor() { }

  ngOnInit() {
    console.log(this.videos.length);

  }
  // imageArray:string[]=["assets/icons/node_details.png", "assets/icons/node_details_2.png", "assets/icons/node_details_3.png"];
  videosPresent(){
    return this.videos?this.videos.length>0:false;
  }

  getYouTubeThumbnailURL(url, size) {

    if (url === null) {
        return '';
    }
    size    = (size === null) ? 'big' : size;
    let results = url.match('[\\?&]v=([^&#]*)');
    let video   = (results === null) ? url : results[1];

    if (size === 'small') {
        return 'http://img.youtube.com/vi/' + video + '/2.jpg';
    }
    return 'http://img.youtube.com/vi/' + video + '/0.jpg';
  };

  openVideo(url:string){
    window.open(url);
  }
}
