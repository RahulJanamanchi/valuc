import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-trace-document-images',
  templateUrl: './trace-document-images.component.html',
  styleUrls: ['./trace-document-images.component.scss']
})
export class TraceDocumentImagesComponent implements OnInit {
  @Input() images: string[];
  constructor(private itemService:ItemService) { }

  ngOnInit() {
    console.log(this.images.length);
  }
  // imageArray:string[]=["assets/icons/node_details.png", "assets/icons/node_details_2.png", "assets/icons/node_details_3.png"];
  imagesPresent(){
    return this.images?this.images.length>0:false;
  }

  getImgURL(path){
    return this.itemService.getImageSrc(path);
  }
}


