import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { ItemDetailsService } from '../../services/itemdetails.service';
import { Inventory } from '../../uimodels/inventory.model';
import { Inventories } from '../../uimodels/inventories.model';
import { TrackerNode } from '../../uimodels/trackernode.model';

import * as _ from 'lodash';
import { ItemService } from 'src/app/services/item.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DocumentCommunicationService } from '../../services/documentcommunication.service';
import { GroupButtonService } from '../group-button/groupbutton.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-conversion-details',
  templateUrl: './conversion-details.component.html',
  styleUrls: ['./conversion-details.component.scss']
})
export class ConversionDetailsComponent implements OnInit,OnDestroy {

  @Input() trackerNode:TrackerNode;
  inventories:Inventories;
  ingredients: TrackerNode[]=[];
  productDetails:Inventory;
  show:boolean=false;
  groupbuttonsub:Subscription;
  clicked: boolean;
  constructor(private router: Router,private activatedRoute:ActivatedRoute, private itemDetailsService:ItemDetailsService,private itemService: ItemService,private documentCommSevrvice:DocumentCommunicationService,private groupButtonService:GroupButtonService) { }

  ngOnInit() {
      this.groupbuttonsub=this.groupButtonService.clickData.subscribe(node=>{let trackernode:TrackerNode=node;this.loadTrackingDetails(trackernode)})
      this.inventories=this.trackerNode.inventories[0];
      this.productDetails=this.inventories.inventory;
      this.ingredients=this.inventories.stockMasters[0].conversions;
  }

  destroyTrace(trackerNode:TrackerNode[]){
    if(this.clicked && trackerNode && trackerNode.length>0){
      this.itemDetailsService.collapseDetails(trackerNode);
    }
    this.clicked=!this.clicked;
  }
  toggleClick(){
    this.clicked=!this.clicked;
  }
  loadTrackingDetails(trackerNode:TrackerNode){
    if(!_.isEmpty(trackerNode.children)){
      this.itemDetailsService.expandDetails(trackerNode.children[0].orders[0]);
      // this.traceClicked = true;
    }
  }
  isConversionPresent(node: TrackerNode){
    return _.get(node,['inventories','0','stockMasters','0','conversions'])?node.inventories[0].stockMasters[0].conversions.length>0:false
  }

  getImageUrl(path:string){
    return this.itemService.getImageSrc(path);
  }

  isTracingPresent(node:TrackerNode){
    return node.children?node.children.length>0:false;
  }

  isDocumentsPresent(node:TrackerNode){
    return _.get(node,['inventories','0','inventory','certificates'])?true:false ||
           _.get(node,['inventories','0','inventory','gallery','images'])?true:false ||
           _.get(node,['inventories','0','inventory','gallery','videos'])?true:false;
  }
  loadDocuments(node:TrackerNode){
    this.documentCommSevrvice.sendTrackerNodeMessage(node);
    this.router.navigate(['tracedocuments'],{relativeTo:this.activatedRoute});
  }

  ngOnDestroy(): void {
    this.groupbuttonsub.unsubscribe();
  }
}
