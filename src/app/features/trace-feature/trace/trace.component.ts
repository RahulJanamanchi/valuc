import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../../../services/tracker.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TreeHelperService } from '../services/tree-helper.service';
import { ChildTrackNode } from '../trace-logs/tracker-tree/child-node';
import { TrackerNode } from '../uimodels/trackernode.model';
import { switchMap } from 'rxjs/operators';
import * as localforage from "localforage";
import {ProductDetailsService} from '../../../services/product-details.service';
const jsonData = require('../../../../assets/json/trace.testdata.json');
const jsonDataForInterface = require('../../../../assets/json/tracedataForInterface.json');

@Component({
  selector: 'app-trace',
  templateUrl: './trace.component.html',
  styleUrls: ['./trace.component.scss']
})
export class TraceComponent implements OnInit {
  routeIndices: number[];
  productName: string;
  node: ChildTrackNode;
  trackerNode:TrackerNode;
  batchNumber: any = {};

  constructor(private router: Router,
    private route: ActivatedRoute,
    private trackerService: TrackerService,
    private treeHelperService: TreeHelperService,
    private productDetails: ProductDetailsService) { }

   ngOnInit() {
    this.productDetails.productData.subscribe((data) => {
      this.batchNumber = data;
      this.initializeTrackingNode(data);
    });
  }

  async initializeTrackingNode(data){
    try {
      const sequence = JSON.parse(data).sequence;
      const indexdbResponse: TrackerNode = await localforage.getItem(sequence);
      if (indexdbResponse) {
        this.setTrackerNodeInterface(indexdbResponse);
      } else {
        await this.trackerService.track(data).subscribe(
          (json: any) => this.setTrackerNodeInterface(json),
          () => this.router.navigateByUrl('/product/error'));
      }
    } catch (e) {
      console.log('error in product home' + e);
    }
  }

  setTrackerNodeInterface(object:any){
    this.trackerNode=object;
    this.productName=this.trackerNode.inventories[0].inventory.productName;
    this.node=this.treeHelperService.addComponent(this.trackerNode);
  }
}
