import { Injectable, Output, EventEmitter, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { KeyValue} from '../../../models/evidence-data';

@Injectable({
  providedIn: 'root'
})
export class EvidenceDetailsService {

  @Output() nodeDetails: EventEmitter<any> = new EventEmitter<any>();
  @Output() products: ReplaySubject<any> = new ReplaySubject<any>(1);
  @Output() productDetails: ReplaySubject<any> = new ReplaySubject<any>(1);

  evidence:KeyValue[]=[];
  evidenceType:string;
  
  ngOnInit() {}
  newNodeDetails(details: any){
    this.nodeDetails.emit(details);
  }
  newProducts(details: any){
    this.products.next(details);
  }
  newProductDetails(details: any[]){
    this.productDetails.next(details);
  }

  evidenceDataMethod(evidencedata:KeyValue[])
  {
    this.evidence = evidencedata;
    
    
  }
  evidenceTypeMethod(evidencetype:string)
  {
    this.evidenceType = evidencetype;
    
  }
  getEvidenceData()
  {
    let dataobject:{"evidence":KeyValue[],"type":string}={"evidence":[],"type":""};
    dataobject["type"]=this.evidenceType;
    dataobject["evidence"]=this.evidence;
    return dataobject;
  }
  constructor() { }
}
