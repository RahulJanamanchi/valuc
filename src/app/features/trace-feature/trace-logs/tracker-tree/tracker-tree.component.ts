import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ComponentFactory, ComponentRef, OnDestroy } from '@angular/core';
import { ChildTrackNode } from './child-node';
import { ChildNodeDirective } from './childnodes.directive';
import { TrackerNodeComponent } from '../tracker-node/tracker-node.component';
import { Inventories } from '../../uimodels/inventories.model';
import { Inventory } from '../../uimodels/inventory.model';
import { BusinessUnitData } from '../../uimodels/businessunitdata.model';
import { ItemDetailsService } from '../../services/itemdetails.service';
import { TrackerNode } from '../../uimodels/trackernode.model';
import {ProductData } from '../../../../models/product-details';
const jsonData: ProductData[] = require('src/assets/json/productData.json');
import * as _ from 'lodash';
import { SubSink } from "subsink";
import { MultipleSupplierComponent } from '../multiple-supplier/multiple-supplier.component';




//**This is the componenet which will be the container for recursive loading component */
@Component({
  selector: 'app-tracker-tree',
  templateUrl: './tracker-tree.component.html',
  styleUrls: ['./tracker-tree.component.scss']
})
export class TrackerTreeComponent implements OnInit, OnDestroy {

  @Input() node: ChildTrackNode;
  productDetails: Inventory;
  buDetails: BusinessUnitData;
  componentrefs: ComponentRef<TrackerNodeComponent>[] = [];
  multipleSupplierComponentRefs: ComponentRef<MultipleSupplierComponent>[] = [];
  @ViewChild(ChildNodeDirective) childNodes: ChildNodeDirective;
  inventories: Inventories;
  mockdata: ProductData[];
  fromInsideComponent:boolean;
  subs:SubSink=new SubSink();


  constructor(private componentFactoryResolver: ComponentFactoryResolver, private itemDetailsService: ItemDetailsService) {
    this.mockdata = jsonData;
  }

  ngOnInit() {
    this.productDetails = { ...this.node.data.inventories[0].inventory };
    this.inventories = this.node.data.inventories[0];
    this.buDetails = { ...this.node.data.companyData.businessUnit };
    
    this.subs.add(this.itemDetailsService.change.subscribe(item =>
      this.loadComponent(item)));
    this.subs.add(this.itemDetailsService.collapseChange.subscribe((item: TrackerNode[]) =>
      this.destroyComponent(item)));
    this.subs.add(this.itemDetailsService.loadMultipleSuppliers.subscribe((nodes: TrackerNode[]) =>
      this.loadMultipleSupplierComponent(nodes)));
    this.subs.add(this.itemDetailsService.collapseMultipleSuppliers.subscribe((node: TrackerNode) =>
      this.destroyMultipleSupplierComponent(node)));
    this.fromInsideComponent=false;
    this.node.data.children?this.node.data.children.map(child=>child.orders[0].parentNode=this.node.data):this.node.data.children;
    if(_.get(this.node.data,['children','0','orders','0'])){
      this.loadComponent(this.node.data.children[0].orders[0]);
    }
    else if(_.get(this.node.data,['inventories','0','stockMasters','0','conversions'])){
      //Product scanned at manufacturer facility has conversions. No need to load child tracker node.
      this.node.data.inventories[0].stockMasters[0].conversions?this.node.data.inventories[0].stockMasters[0].conversions.map(conversion=>conversion.parentNode=this.node.data):this.node.data.inventories[0].stockMasters[0].conversions;
      // this.loadComponent(this.node.data.inventories[0].stockMasters[0].conversions[0]);
    }
  }

  loadComponent(node: TrackerNode) {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TrackerNodeComponent);
    let viewContainerRef = this.childNodes.viewContainerRef;
    viewContainerRef.clear();
    let componentref = viewContainerRef.createComponent(componentFactory);
    (<TrackerNodeComponent>componentref.instance).trackerNode = node;
    (<TrackerNodeComponent>componentref.instance).fromInsideComponent = true;
    this.componentrefs.push(componentref);
  }

  loadMultipleSupplierComponent(nodes: TrackerNode[]) {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MultipleSupplierComponent);
    let viewContainerRef = this.childNodes.viewContainerRef;
    viewContainerRef.clear();
    let multipleSupplierComponentRef = viewContainerRef.createComponent(componentFactory);
    (<MultipleSupplierComponent>multipleSupplierComponentRef.instance).orders = nodes;
    this.multipleSupplierComponentRefs.push(multipleSupplierComponentRef);
  }

  destroyMultipleSupplierComponent(node: TrackerNode) {
    if (this.multipleSupplierComponentRefs) {
      this.multipleSupplierComponentRefs.map(ref => {
        (<MultipleSupplierComponent>ref.instance).orders.map(child => {
          if (child.companyData.company.name === node.companyData.company.name) {
            ref.destroy();
            return true;
          }
        })
      });
    }
  }

  destroyComponent(nodes: TrackerNode[]) {
    if (this.componentrefs) {
      this.componentrefs.map(ref => {
        nodes.map(node => {
          if (((<TrackerNodeComponent>ref.instance).trackerNode.inventories[0].inventory.productName === node.inventories[0].inventory.productName ||
            (<TrackerNodeComponent>ref.instance).trackerNode.companyData.company.name === node.companyData.company.name) && 
            (<TrackerNodeComponent>ref.instance).trackerNode.orderData.orderNumber===_.get(node,['inventories','0','stockMasters','0','orders','0','orderData','orderNumber'])) {
            ref.destroy();
          }
          if (_.get(node, ['inventories', '0', 'stockMasters', '0', 'conversions'])) {
            this.destroyComponent(node.inventories[0].stockMasters[0].conversions);
          }
        })
      });
    }
  }
  isShippedFromOneOrMoreSupplier(node:TrackerNode){
    return _.get(node,['children'])?node.children.length>=1:false;
  }

  ngAfterContentChecked(){
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    // this.itemDetailsService.change.unsubscribe();
    // this.itemDetailsService.collapseChange.unsubscribe();
    // this.itemDetailsService.collapseMultipleSuppliers.unsubscribe();
    // this.itemDetailsService.loadMultipleSuppliers.unsubscribe();
  }
}
