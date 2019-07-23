import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TrackerNode } from "../uimodels/trackernode.model";
import { BusinessUnitData } from "../uimodels/businessunitdata.model";
import { filter } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class DocumentCommunicationService{

    subject: BehaviorSubject<string> = BehaviorSubject.create();
    observable:Observable<string> = this.subject.pipe(filter(v => v !== ""));


    trackerNodeSource:BehaviorSubject<TrackerNode> = new BehaviorSubject(this.getDefaultTrackerNode());
    businessUnitSource:BehaviorSubject<BusinessUnitData> = new BehaviorSubject(this.getDefaultBUNode());

    constructor() { }
    sendTrackerNodeMessage(node) {
        this.trackerNodeSource.next(node);
    }

    sendbusinessUnitMessage(businessUnit) {
        this.businessUnitSource.next(businessUnit);
    }
    getDefaultTrackerNode():TrackerNode{
        return {
            "inventories":[],
            "companyData":{
                "company":{"gallery":{"images":[],"videos":[]},"evidences":[]},
                "businessUnit":{"gallery":{"images":[],"videos":[]}}
            },
            "orders":[],
            "children":[],
            "orderData":{"orderNumber":"","orderCreatedDate":"","noOfUnits":1,"_id":""},
            "isParent":true
        }
    }

    getDefaultBUNode():BusinessUnitData{
        return {"name":"","code":"","type":"","_id":"","evidences":[],"gallery":{"images":[],"videos":[]},"certificates":[]}
    }
}
