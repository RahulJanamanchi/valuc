import { Component, OnInit, Input,Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ScanService } from '../../../services/scan.service';
import { switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Item } from 'src/app/models';
import { Store } from '@ngrx/store';
import { Inventory } from '../../trace-feature/uimodels/inventory.model';
import { ItemState, ItemActions } from 'src/app/root-store';
import * as moment from 'moment';
import { TrackerNode } from '../../trace-feature/uimodels/trackernode.model';
import { StockMasters } from '../../trace-feature/uimodels/stockMasters.model';
import { DataEvidenceService } from '../product-services/data-evidence.service';
import * as _ from 'lodash';
import * as localforage from "localforage";
import { EvidenceDetailsService } from '../../evidence-details/services/evidence-details.service';

import {KeyValue} from '../../../models/evidence-data';
import {ProductDetailsService} from '../../../services/product-details.service';
import { Gallery } from '../../trace-feature/uimodels/gallery.model';
import { Image } from "../../trace-feature/uimodels/image.model";
import {StoryDetailsService} from '../../../components/story-button/story-service/story-details.service';
import { StoryCategory} from '../../../models/storyInterface';
import { GoogleResponseService } from 'src/app/components/maps/google-response.service';
const jsonData : StoryCategory[]= require('../../../../assets/json/storyData.json');


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {

  @Input() product: any;
  trackerNode:TrackerNode;
  productDetails: any= {};
  productGrades: Array<any>=[];
  productQuality: Array<any>=[];
  batchNumber: any = {};
  percentTimeRemaining: any;
  timeRemaining: any;
  humanizedRemaining: any; //Output String
  totalTime: any;

  mfgDate:string;
  expDate:string;
  diffexpcurrent:any;

  isLoad: boolean=false;
  gallery: Gallery = {
    images: [],
    videos: []
  };

  //variables for lifestyle home page
  storyData:StoryCategory[]=[];
  isStoryData:boolean=false;
  pageFlag:boolean=true;
  imageArray:string[]=["assets/images/bag1.jpg","assets/images/bag2.jpg","assets/images/bag3.jpg","assets/images/bag4.jpg","assets/images/bag5.jpg","assets/images/bag6.jpg"]
  mainImage:string="assets/images/Home-Screen.png";
  checkedTrue:boolean=true;
  
  constructor(public router: Router,
    public route: ActivatedRoute,
    private scanService: ScanService,
    private sanitizer: DomSanitizer,
    private dataEvidence:DataEvidenceService,
    private googleService:GoogleResponseService,
    private evidenceDetailService:EvidenceDetailsService,
    private store: Store<ItemState.State>,
    private productData: ProductDetailsService,
    private storyService: StoryDetailsService) { }


    ngOnInit() {
    this.productData.productData.subscribe((data) => {
      this.batchNumber = data;
      this.initializeNode(data);
    });
    this.storyData = jsonData;
    this.isStoryData = true;
    this.storyService.toProduct.subscribe((storydata)=>{
        this.gotoRoute('/product/story');
    });
    

  }
 
  async initializeNode(data) {
    try {
      const sequence = data.sequence;
      const indexdbResponse: TrackerNode = await localforage.getItem(sequence);
      if (indexdbResponse) {
        this.trackerNode = indexdbResponse;
        this.setProduct(this.trackerNode.inventories[0].inventory,
                        this.trackerNode.companyData.company,
                        this.trackerNode.companyData.businessUnit,
                        this.trackerNode.inventories[0].stockMasters[0]);
      } else {
        await this.scanService.scan(data).subscribe(
          (json: any) => this.getSmallProductInfoFromVeryLargeJson(json),
          () => this.router.navigateByUrl('/product/error'))
      }
    } catch (e){
      this.router.navigateByUrl('product/error');
    }
  }

  getSmallProductInfoFromVeryLargeJson(jsonObj){
    this.trackerNode=jsonObj;

    this.setProduct(this.trackerNode.inventories[0].inventory,
                    this.trackerNode.companyData.company,
                    this.trackerNode.companyData.businessUnit,
                    this.trackerNode.inventories[0].stockMasters[0]);
  }

  trackerNodeData:TrackerNode;
  evidenceData:KeyValue[];
  async setProduct( inventory:Inventory, company,businessUnit,stockMasters:StockMasters) {

    this.evidenceData = await this.dataEvidence.getData(this.trackerNode);
    this.evidenceDetailService.evidenceDataMethod(this.evidenceData);
    this.googleService.getData();

    const product = {
      title: inventory.productName,
      brand: inventory.brandName,
      quantity: inventory.unitOfMeasureName,
      location: company.name + ' ' + businessUnit.name + ' ( ' + businessUnit.type + ' )',
      image: this.getImageSrc(inventory.gallery.images[0].imageURL)
    };


    const productDetails ={
      batchNo: stockMasters.stockMaster.batchNumber,
      mfgDate: stockMasters.stockMaster.manufacturingDate,
      expDate: stockMasters.stockMaster.expiryDate,
      mrp: inventory.price.MRP.value,
      description: inventory.productName,
      sequence:stockMasters.items[0].stockItem.sequence
    };

    // Time remaining
    productDetails.mfgDate = moment(productDetails.mfgDate).format("DD/MM/YY");
    productDetails.expDate = moment(productDetails.expDate).format("DD/MM/YY");
    this.timeRemaining = moment.duration(moment(productDetails.expDate).add(1,'days').diff(moment())).asDays();
    this.totalTime = moment.duration(moment(productDetails.expDate).diff(moment(productDetails.mfgDate))).asDays();
    this.diffexpcurrent = moment.duration(moment(this.expDate).diff(moment())).asDays();

    if(this.timeRemaining>0){
      this.humanizedRemaining = moment.duration(moment(productDetails.expDate).diff(moment())).humanize();
      this.percentTimeRemaining = this.totalTime>0?(this.timeRemaining*100/this.totalTime):(this.timeRemaining*100/1);

    } else {
      this.humanizedRemaining = "Expired";
      this.percentTimeRemaining = 0;

    }

    _.get(inventory,['productBrandVariety','gradeDefinition','length'])?inventory.productBrandVariety.gradeDefinition.map((item)=>this.productGrades.push(item)):"";
    _.get(inventory,['productBrandVariety','qualityDefinition','length'])?inventory.productBrandVariety.qualityDefinition.map((item)=>this.productQuality.push(item)):null;

    this.product = product;
    this.productDetails=productDetails;
    this.isLoad=true;

    const item: Item={
      title: product.title,
      thumbnailUrl: `${environment.apis.images}/${inventory.gallery.images[0].imageURL}`,
      batchNumber: productDetails.batchNo,
      sequence: stockMasters.items[0].stockItem.sequence,
      itemCode: this.batchNumber.itemCode
    };

    localforage.setItem(stockMasters.items[0].stockItem.sequence,this.trackerNode);
    localforage.setItem("mainproduct",item);
    // this.store.dispatch(new ItemActions.ItemAddAction(item));
  }

  traceProduct() {
     this.router.navigateByUrl('/trace');
  }
  getImageSrc(path) {
    return this.sanitizer.bypassSecurityTrustStyle('linear-gradient(to bottom, rgba(236, 230, 230, 0.35), rgba(62, 57, 57, 0.9)), '+
      `url("${environment.apis.images}/${path}")`
    );
  }

  gotoRoute(url) {
    this.router.navigateByUrl(url)
  }
  toFirstStory(url){
    this.storyService.storyDetailMethod(this.storyData[0]);
    this.router.navigateByUrl(url);
  }
  toUsagePage(){
    this.router.navigate(['/product/usage']);
  }
 
  toTracePage(){
    this.router.navigate(['/trace']);
  }
  getStyle() {
    return {
    'width.px':30,
    'height.px':30,
    'background-color':'white',
    'border-radius':'50px' };
  }

  getStar() {
    return {
    'width.px':25,
    'height.px':20,
    'background-color':'white'};
  }

  getArrow() {
    return {
    'width.px':25,
    'height.vh':7,
    'fill':'white',
    'color':'white',

  };
  }
  getCorrect() {
    return {
    'width.':50,
    'height.px':50,
    'background-color':'transparent',
    'margin-right.vw': 40,
  
  
  };
  }
  changeImage(image:string){
      this.mainImage = image;
  }
  styleBackGround(): Object {
    return {
      'background-image': 'url(' + this.mainImage + ')',
      'background-repeat': 'repeat',
      'background-position': 'center',
      'background-attachment': 'scroll',
      'background-size': 'cover'
    };
  }
}
