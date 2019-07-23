import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentCommunicationService } from '../../services/documentcommunication.service';
import { TrackerNode } from '../../uimodels/trackernode.model';
import { BusinessUnitData } from '../../uimodels/businessunitdata.model';
import { Certificate } from '../../uimodels/certificate.model';
import { truncate } from 'fs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trace-document-landing',
  templateUrl: './trace-document-landing.component.html',
  styleUrls: ['./trace-document-landing.component.scss']
})
export class TraceDocumentLandingComponent implements OnInit,OnDestroy {
  node:TrackerNode;
  businessUnit:BusinessUnitData;
  certificates:Certificate[];
  businessunitsub:Subscription;
  trackernodesub:Subscription;
  constructor(private documentCommunicationService:DocumentCommunicationService) {}

  ngOnInit() {
    this.trackernodesub=this.documentCommunicationService.trackerNodeSource.subscribe(inputNode=>{
      if(!this.isDefaultTrackerNode(inputNode)){
        this.node=inputNode;
        //clearing subject cache
      }
      else{
        this.node=null;
      }
          });
    this.businessunitsub=this.documentCommunicationService.businessUnitSource.subscribe(inputBU=>{
      if(!this.isDefaultBU(inputBU)){
        this.businessUnit=inputBU;
        //clearing subject cache.
      }
      else
        this.businessUnit=null;
    });
  }

  getNode(){
    return this.node;
  }

  getBusinessUnit(){
    return this.businessUnit;
  }

  isDefaultBU(businessUnit:BusinessUnitData):boolean{
    if(businessUnit.certificates?businessUnit.certificates.length===0:false &&
       businessUnit.gallery.images?businessUnit.gallery.images.length===0:false && 
       businessUnit.gallery.videos?businessUnit.gallery.videos.length===0:false){
        return true;
    }
    return false;
  }

  isDefaultTrackerNode(inputNode:TrackerNode):boolean{
    if(inputNode.inventories?inputNode.inventories.length===0:false){
      return true;
    }
      return false;
  }

  ngAfterViewChecked(){
    
  }

  ngOnDestroy(): void {
    if(this.node && !this.isDefaultTrackerNode(this.node)){
      this.documentCommunicationService.trackerNodeSource.next(this.documentCommunicationService.getDefaultTrackerNode());
    }
    if(this.businessUnit && !this.isDefaultBU(this.businessUnit)){
      this.documentCommunicationService.businessUnitSource.next(this.documentCommunicationService.getDefaultBUNode());
    }
    this.businessunitsub.unsubscribe();
    this.trackernodesub.unsubscribe();
  }
}