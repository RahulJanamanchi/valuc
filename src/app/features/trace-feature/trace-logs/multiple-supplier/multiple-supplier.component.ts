import { Component, OnInit, Input } from '@angular/core';
import { TrackerNode } from '../../uimodels/trackernode.model';
import { ItemDetailsService } from '../../services/itemdetails.service';

@Component({
  selector: 'app-multiple-supplier',
  templateUrl: './multiple-supplier.component.html',
  styleUrls: ['./multiple-supplier.component.scss']
})
export class MultipleSupplierComponent implements OnInit {
  @Input() orders: TrackerNode[];
  constructor(private trackerTreeService:ItemDetailsService) { }

  ngOnInit() {

    console.log("entered this component");
  }

  loadCorrespondingOrderDetails(order:TrackerNode){
      this.trackerTreeService.collapseMultipleSuppliersInUITreeNode(order);
      this.trackerTreeService.expandDetails(order);
  }
}
