import { Component, OnInit, ViewChild, Renderer2, Input, ElementRef } from '@angular/core';
import { TrackerNode } from '../../uimodels/trackernode.model';
import { Inventory } from '../../uimodels/inventory.model';
import { BusinessUnitData } from '../../uimodels/businessunitdata.model';
import { Conversion } from '../../uimodels/conversion.model';
import { ItemDetailsService } from '../../services/itemdetails.service';
import { Company } from '../../uimodels/company.model';
import { Inventories } from '../../uimodels/inventories.model';
import * as _ from 'lodash';
import { ItemService } from 'src/app/services/item.service';
import { DocumentCommunicationService } from '../../services/documentcommunication.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-businessunit-details',
  templateUrl: './businessunit-details.component.html',
  styleUrls: ['./businessunit-details.component.scss']
})
export class BusinessunitDetailsComponent implements OnInit {

  @Input() trackerNode: TrackerNode;
  businessUnitDetails: BusinessUnitData;
  conversionDetails:Conversion[];
  company:Company;
  address:string;
  inventories: Inventories;
  companyImageUrl:string;
  @ViewChild('expandeditems') private expandeditems : ElementRef;
  @ViewChild('collapseditems') private collapseditems : ElementRef;

  constructor(private router:Router,private activatedRoute:ActivatedRoute, private renderer:Renderer2,private itemDetailsService:ItemDetailsService,private itemService:ItemService,private documentCommSevrvice:DocumentCommunicationService) { }

  ngOnInit() {
    this.company=this.trackerNode.companyData.company;
    this.inventories=this.trackerNode.inventories[0];
    this.address=this.company.addresses[0]?this.company.addresses[0].addressLine.concat(',',this.company.addresses[0].city,',',this.company.addresses[0].state,',',this.company.addresses[0].country):"";
    if(this.trackerNode.companyData.businessUnit){
      this.businessUnitDetails=this.trackerNode.companyData.businessUnit;
    }
    this.companyImageUrl=this.itemService.getImageSrc(this.businessUnitDetails.gallery.images[0]?this.businessUnitDetails.gallery.images[0].imageURL:"");
    this.conversionDetails=_.get(this.trackerNode,['inventories','0','conversions']);
  }

  expandProductDetails(){
    this.renderer.setStyle(this.expandeditems.nativeElement,'display','inline-grid');
    this.renderer.setStyle(this.collapseditems.nativeElement,'display','none');
  }

  expandItemNode(item){
    this.itemDetailsService.expandDetails(item);
  }

  isConversionPresent(inventories: Inventories){
    return _.get(inventories,['stockMasters','0','conversions'])?inventories.stockMasters[0].conversions.length>0:false
  }
  

  loadDocuments(businessUnit:BusinessUnitData){
    this.documentCommSevrvice.sendbusinessUnitMessage(businessUnit);
    this.router.navigate(['tracedocuments'],{relativeTo:this.activatedRoute});
  }

  isDocumentsPresent(businessUnit:BusinessUnitData){
    return _.get(businessUnit,['certificates'])?true:false ||
           _.get(businessUnit,['gallery','images'])?true:false ||
           _.get(businessUnit,['gallery','videos'])?true:false;
  }
}
