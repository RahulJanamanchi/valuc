import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootStoreState, ItemSelectors } from 'src/app/root-store';
import { Item } from 'src/app/models';
import { Inventories } from '../uimodels/inventories.model';
import { Inventory } from '../uimodels/inventory.model';
import { ItemService } from 'src/app/services/item.service';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-trace-header',
  templateUrl: './trace-header.component.html',
  styleUrls: ['./trace-header.component.scss']
})
export class TraceHeaderComponent implements OnInit {
  @Input() inventories:Inventories;
  product: Inventory;
  mfgDate:string;
  expDate:string;
  productDetails: any= {};
  percentTimeRemaining: any;
  percentTimeRemainingString: string;
  timeRemaining: any;
  humanizedRemaining: any; //Output String
  totalTime: any;
  expdiffcurrent : any;
  constructor(private store$: Store<RootStoreState.State>,private router: Router,private itemService: ItemService,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.product=this.inventories.inventory;
    this.inventories.stockMasters[0].stockData.stockMaster.batchNumber;
    this.calculateDates();
  }
  calculateDates() {
    // Time remaining
    this.mfgDate =moment(this.inventories.stockMasters[0].stockMaster.manufacturingDate).format("DD/MM/YY");
    this.expDate =moment(this.inventories.stockMasters[0].stockMaster.expiryDate).format("DD/MM/YY");

    // this.expDate = moment(this.expDate).format("DD/MM/YY");
    // this.mfgDate = moment(this.mfgDate).format("DD/MM/YY");
    this.timeRemaining = moment.duration(moment(this.expDate).add(1,'days').diff(moment())).asDays();
    this.totalTime = moment.duration(moment(this.expDate).diff(moment(this.mfgDate))).asDays();
    this.expdiffcurrent = moment.duration(moment(this.expDate).diff(moment())).asDays();


    if(this.timeRemaining>0){
      this.humanizedRemaining = moment.duration(moment(this.expDate).diff(moment())).humanize();
      this.percentTimeRemaining = this.totalTime>0?(this.expdiffcurrent*100/this.totalTime):(this.timeRemaining*100/1);
    } else {
      this.humanizedRemaining = "Expired";
      this.percentTimeRemaining = 0;
    }
  };


  toProductPage() {
    this.router.navigateByUrl('/product');
  }

  toStoresPage() {
    this.router.navigateByUrl('/stores');
  }

  getImageUrl(path:string){
    // return this.itemService.getImageSrc(path);
    return this.sanitizer.bypassSecurityTrustStyle('linear-gradient(to bottom, rgba(200,20,0,0), rgba(128,128,128,1)), '+
      `url("${environment.apis.images}/${path}")`
    );
  }

  getStyle() {
    return { 'width.px':30, 'height.px':30, 'background-color':'white', 'border-radius':'50px' };
  }
}
