import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ProductData } from '../../models/product-details';
import { Item } from 'src/app/models/item';
import { ItemSelectors, RootStoreState } from 'src/app/root-store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { EvidenceDetailsService } from './services/evidence-details.service';
import { MapData } from '../../models/map-data';
import { KeyValue, Location } from '../../models/evidence-data';
import {ProductHomeComponent } from '../../features/product-feature/product-home/product-home.component';

@Component({
  selector: 'app-evidence-details',
  templateUrl: './evidence-details.component.html',
  styleUrls: ['./evidence-details.component.scss']
})
export class EvidenceDetailsComponent implements OnInit,OnDestroy {

  @Input() evt:any;

  evidenceType: string;
  percentTimeRemaining:number;
  percentTimeRemainingString:string;
  evidenceData:KeyValue[];
  pilltype:string = 'Node';

  color:string;
  mockdata : MapData;



  //Evidence Components Spawn Flags
  nodeDataIsSet: boolean;
  dataIsSet: boolean;


  // Graph
  canvas: any;
  ctx: any;
  data:{}={};



  constructor(private evidenceDetailsService: EvidenceDetailsService,
    private store$: Store<RootStoreState.State>,
    private router: Router,
    private productHome:ProductHomeComponent) {
    this.nodeDataIsSet = false;
    this.dataIsSet = false;
    //this.evidenceType = "Enviromental Impact";
    this.percentTimeRemaining = 40;
    this.percentTimeRemainingString = "40%";
    this.color="greenyellow";
  }


  ngOnInit() {
    this.evidenceDetailsService.nodeDetails.subscribe(nodeDetails =>
      {
        this.nodeEvidenceDetails = nodeDetails;
        this.setNodeData(nodeDetails);
      });
    let dataobject:{"evidence":KeyValue[],"type":string}={"evidence":[],"type":""};
    dataobject = this.evidenceDetailsService.getEvidenceData();
    this.evidenceData = dataobject["evidence"];
    this.evidenceType = dataobject["type"];

  }



  nodeLevel: Location['nodeLevel']=[];
  productKeyValues: Location['productLevel'];
  businessUnit: Location['businessUnit'];
  nodeLevelFlag:boolean=true;
  //Map sending data When Node is clicked
  //Helps generate array of Node and Product Evidence arrays
  getData(evt:string){
    this.dataIsSet=true;
    for(let i:number=0;i<this.evidenceData.length;i++)
    {
      if(this.evidenceType === this.evidenceData[i]['type'])
      {

        for(let j in this.evidenceData[i]['location'])
        {
          if(this.evidenceData[i]['location'][j]['address'] === evt)
          {
            this.productKeyValues = this.evidenceData[i]['location'][j]['productLevel'];
            this.nodeDataIsSet = false;
            this.nodeLevel = this.evidenceData[i]['location'][j]['nodeLevel'];
            this.businessUnit= this.evidenceData[i]['location'][j]['businessUnit'];
            break;
          }
        }
        break;
      }
    }
    if(this.nodeLevel === [])
    {
      this.nodeLevelFlag = false;
    }
    if(this.productKeyValues!=[]&&this.productKeyValues!=undefined){
      this.evidenceDetailsService.newProducts(this.productKeyValues);
    }
  }

  toProductPage() {
    this.router.navigateByUrl('/product');
  }

  nodeEvidenceDetails: any;
  productEvidenceDetails: any;

  setNodeData(evidence: any){
    this.nodeEvidenceDetails = evidence;
    this.nodeDataIsSet = true;
  }

  ngOnDestroy(): void {
    this.evidenceDetailsService.nodeDetails.unsubscribe();
  }

}
