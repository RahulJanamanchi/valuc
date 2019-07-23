import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ComponentRef } from '@angular/core';
import { ConversionDetailsComponent } from '../conversion-details/conversion-details.component';
import { ConversionNodeDirective } from '../conversion-details/conversion-node.directive';
import { Inventories } from '../../uimodels/inventories.model';
import { Inventory } from '../../uimodels/inventory.model';
import { TrackerNode } from '../../uimodels/trackernode.model';

@Component({
  selector: 'app-conversion-tree',
  templateUrl: './conversion-tree.component.html',
  styleUrls: ['./conversion-tree.component.scss']
})
export class ConversionTreeComponent implements OnInit {
  @Input() trackerNode:TrackerNode;
  inventories: Inventories;
  productDetails : Inventory;
  @ViewChild(ConversionNodeDirective) conversionNodes: ConversionNodeDirective;
  componentrefs: ComponentRef<ConversionDetailsComponent>[]=[];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.inventories=this.trackerNode.inventories[0];
    this.productDetails=this.inventories.inventory;
  }

  loadComponent(product: Inventory) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConversionDetailsComponent);
    let viewContainerRef = this.conversionNodes.viewContainerRef;
    //viewContainerRef.clear();
     let componentref = viewContainerRef.createComponent(componentFactory);
    (<ConversionDetailsComponent>componentref.instance).inventories[0].inventory = product;
    this.componentrefs.push(componentref);
  }

  destroyComponent(productDetails: Inventory[]){
      if(this.componentrefs){
        this.componentrefs.map(ref=>{
          productDetails.map(productDetails=>{
            if((<ConversionDetailsComponent>ref.instance).inventories[0].inventory.productName===productDetails.productName)
            {
                ref.destroy();
            }
          })
        }); 
      }
  }

}
//http://localhost:4200/trace/%7B%22sequence%22:%22IGoSGd0gDtMfDL8c%22,%22batchNumber%22:%22BM2-130619%22,%22itemCode%22:%2200122-00001-00003%22%7D