import { Component, OnInit, Input } from '@angular/core';
import { TrackerNode } from '../../uimodels/trackernode.model';
import { Inventory } from '../../uimodels/inventory.model';
import * as _ from 'lodash';
import * as localforage from "localforage";
import { Certificate } from '../../uimodels/certificate.model';
import { BusinessUnitData } from '../../uimodels/businessunitdata.model';
import { Image } from '../../uimodels/image.model';
import { Video } from '../../uimodels/video.model';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { RootStoreState, ItemSelectors } from 'src/app/root-store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Item } from 'src/app/models';

@Component({
  selector: 'app-trace-document-home',
  templateUrl: './trace-document-home.component.html',
  styleUrls: ['./trace-document-home.component.scss']
})
export class TraceDocumentHomeComponent implements OnInit {

  @Input() node : TrackerNode;
  @Input() businessUnit:BusinessUnitData;
  product:Inventory;
  imageURLs:string[]=[];
  videoURLs:string[]=[];

  batchNumber:string;
  backgroundImageURL:String;
  certificates:Certificate[];

  constructor(private router: Router,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    if (this.node?this.node.inventories.length>0:false) {
      _.get(this.node, ['inventories', '0', 'inventory', 'gallery', 'images'])? this.node.inventories[0].inventory.gallery.images.map((image:Image)=>this.imageURLs.push(image.imageURL)):[];
      this.backgroundImageURL=_.get(this.node, ['inventories', '0', 'inventory', 'gallery', 'images'])?this.node.inventories[0].inventory.gallery.images[0].imageURL:"";
      _.get(this.node, ['inventories', '0', 'inventory', 'gallery', 'videos'])?this.node.inventories[0].inventory.gallery.videos.map((video:Video)=>this.videoURLs.push(video.videoURL)):[];

      this.batchNumber = _.get(this.node, ['inventories', 'stockMasters', '0', 'stockMaster', 'batchNumber']);
      this.certificates = _.get(this.node,['inventories','0','inventory','certificates']);
      this.product=this.node.inventories[0].inventory;
    }
    else if (this.businessUnit) {
      _.get(this.businessUnit,['gallery','images'])? _.get(this.businessUnit,['gallery','images']).map((image:Image)=>this.imageURLs.push(image.imageURL)):[];
      _.get(this.businessUnit,['gallery','videos'])? _.get(this.businessUnit,['gallery','videos']).map((video:Video)=>this.videoURLs.push(video.videoURL)):[];
      this.backgroundImageURL=_.get(this.businessUnit,['gallery','images'])? this.businessUnit.gallery.images[0].imageURL:"";

      this.certificates = _.get(this.businessUnit,['certificates']);
    }
  }

  getImgURL(path:String){
    return this.sanitizer.bypassSecurityTrustStyle('linear-gradient(to bottom, rgba(200,20,0,0), rgba(128,128,128,1)), '+
      `url("${environment.apis.images}/${path}")`
    );
  }

  toTracePage() {
      this.router.navigateByUrl('/trace');
  }

  toProductPage() {
    this.router.navigateByUrl('/product');
  }
  getStyle() {
    return { 'width.px':30, 'height.px':30, 'background-color':'white', 'border-radius':'50px' };
  }
}
