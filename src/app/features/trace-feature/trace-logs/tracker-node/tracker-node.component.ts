import { Component, OnInit, Input } from '@angular/core';
import { TrackerNode } from '../../uimodels/trackernode.model';
import * as _ from 'lodash';
import { OrderData } from '../../uimodels/orderdata.model';
import { StockMasterOrder } from '../../uimodels/stockermasterorder.model';



/**
 * This component will be loaded recursively n the parent componenet for children.
 */
@Component({
  selector: 'app-tracker-node',
  templateUrl: './tracker-node.component.html',
  styleUrls: ['./tracker-node.component.scss']
})
export class TrackerNodeComponent implements OnInit {

  @Input() trackerNode: TrackerNode;
  @Input() fromInsideComponent: boolean;
  fromParent:boolean;
  noOfSuppliers:number;
  supplierOrders:TrackerNode[];
  constructor() { }

  ngOnInit() {
    console.log("fromInsideComponent"+this.fromInsideComponent);
    this.fromParent=this.trackerNode.parentNode?true:false;
    this.noOfSuppliers=this.getNoOfSupplier();
    if(this.fromParent){
      this.supplierOrders=_.get(this.trackerNode,['children'])?this.getChildOrdersForRootNode():null;
    }
    else{
      this.supplierOrders=_.get(this.trackerNode,['children','0','orders','0'])?this.getChildOrders(this.trackerNode.children[0].orders[0]):null;
      // this.trackerNode=_.get(this.trackerNode,['children','0','orders','0']);
    }
  }

 
  isShippedFromOneOrMoreSupplier(node:TrackerNode){
    return this.noOfSuppliers>=1;
  }

  getChildOrdersForRootNode():TrackerNode[]{
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

  getChildOrders(trackerNode:TrackerNode):TrackerNode[]{
    let supplierOrders:TrackerNode[]=[];
     trackerNode.children.map(child=>{ 
      if(trackerNode.inventories){
        trackerNode.inventories[0].stockMasters[0].orders
      .map(stockerMasterOrder=> {
        if(stockerMasterOrder.orderData.orderNumber===child.orders[0].orderData.orderNumber)
          supplierOrders.push(child.orders[0]);
      })
      }
    })
    return supplierOrders;
  }

  getNoOfSupplier(){
    return _.get(this.trackerNode, ['inventories','0','stockMasters','0','orders','length']);
  }

  getCorrespondingChild(node:TrackerNode,stockMasterOrder:StockMasterOrder){
    this.trackerNode.children.map(child=>{
      if(child.orders){
          return 
      }
    })
    // return node.children.some(child=>child.orders[0].orderData.orderNumber===stockMasterOrder.orderData.orderNumber)
  }

}
