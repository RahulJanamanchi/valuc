import { Component, OnInit, Input } from '@angular/core';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { TrackerNode } from '../../uimodels/trackernode.model';
import { StockMasters } from '../../uimodels/stockMasters.model';
import { ItemDetailsService } from '../../services/itemdetails.service';
import { Inventory } from '../../uimodels/inventory.model';
import { OrderData } from '../../uimodels/orderdata.model';
import * as _ from 'lodash';
import { ItemService } from 'src/app/services/item.service';



@Component({
  selector: 'app-transport-event-details',
  templateUrl: './transport-event-details.component.html',
  styleUrls: ['./transport-event-details.component.scss']
})
export class TransportEventDetailsComponent implements OnInit {

  @Input() trackerNode : TrackerNode;
  loadedNode:TrackerNode;
  noOfFacilities: number;
  clicked: boolean;
  noOfUnits:string;
  orderCreateDate:string;
  companyImageUrl:string;
  siblingOrders:TrackerNode[];

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,private itemDetailsService:ItemDetailsService,private itemService:ItemService) { }

  ngOnInit() {
    this.noOfFacilities=this.getNoOfSupplier();
    this.clicked=false;
    this.loadedNode=this.trackerNode;
    this.companyImageUrl=this.itemService.getImageSrc(_.get(this.loadedNode,['companyData','businessUnit','gallery','images','0','imageURL']));
    if(_.get(this.loadedNode,['inventories','0','stockMasters','0','orders','0'])){
      this.orderCreateDate=this.loadedNode.inventories[0].stockMasters[0].orders[0].orderData.orderCreatedDate;
    }
    else{
      this.orderCreateDate=this.loadedNode.inventories[0].orderCreatedDate;
    }

    this.siblingOrders=this.getChildOrders();
    this.iconRegistry.addSvgIcon(
      'shipped',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/shipped.svg'));
  }

  getChildOrders():TrackerNode[]{
    let supplierOrders:TrackerNode[]=[];
     this.trackerNode.children.map(child=>{ 
      if(this.trackerNode.inventories){
      this.trackerNode.inventories[0].stockMasters[0].orders
      .map(stockerMasterOrder=> {
        if(stockerMasterOrder.orderData.orderNumber===child.orders[0].orderData.orderNumber)
          supplierOrders.push(child.orders[0]);
      })
      }
    })
    return supplierOrders;
  }

  getNoOfSupplier():number{
    return _.get(this.trackerNode, ['inventories','0','stockMasters','0','orders','length']);
  }

  getSrc() {
    return "assets/icons/shipped.svg";
  }
  
  loadAllFacilities(){
    if(!this.clicked){
      let nodes:TrackerNode[]=[this.loadedNode];
      this.itemDetailsService.collapseDetails(nodes);

      this.itemDetailsService.loadMultipleSuppliersInUITreeNode(this.siblingOrders);
    }
    this.clicked=!this.clicked; 
  }
  
  private getAllIncludedProducts(stockMasters:StockMasters,productDetailsList:Inventory[]){
    if(stockMasters.conversions){
      stockMasters.conversions.map(conversion=>{
        productDetailsList.push(conversion.inventories[0].inventory);
        this.getAllIncludedProducts(conversion.inventories[0].stockMasters[0],productDetailsList);
      });
      
    }
  }
}
