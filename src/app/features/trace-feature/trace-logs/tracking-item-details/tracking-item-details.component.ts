import { Component, OnInit, Input } from '@angular/core';
import { Inventory } from '../../uimodels/inventory.model';
import { Inventories } from '../../uimodels/inventories.model';
import { ItemService } from 'src/app/services/item.service';
import { DocumentCommunicationService } from '../../services/documentcommunication.service';
import { TrackerNode } from '../../uimodels/trackernode.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tracking-item-details',
  templateUrl: './tracking-item-details.component.html',
  styleUrls: ['./tracking-item-details.component.scss']
})
export class TrackingItemDetailsComponent implements OnInit {
  @Input() inventories: Inventories;
  productDetails:Inventory;
  batchNumber: string;
  serialNo:string;
  image:any;

  constructor(private router: Router,private activatedRoute:ActivatedRoute,private itemService:ItemService,private documentCommSevrvice:DocumentCommunicationService) { }

  ngOnInit() {
    this.productDetails=this.inventories.inventory;
    this.batchNumber=this.inventories.stockMasters[0].stockData.stockMaster.batchNumber;
    this.image=this.itemService.getImageSrc(this.inventories.inventory.gallery.images[0].imageURL);
  }

  loadDocuments(){
    let tempNode:TrackerNode={"inventories":[]};
    tempNode.inventories[0]=this.inventories;
    this.documentCommSevrvice.sendTrackerNodeMessage(tempNode);
    this.router.navigate(['tracedocuments'],{relativeTo:this.activatedRoute});
  }
}