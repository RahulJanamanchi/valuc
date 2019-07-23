import { Injectable } from '@angular/core';
import { ChildTrackNode } from '../trace-logs/tracker-tree/child-node';
import { TrackerNodeComponent } from '../trace-logs/tracker-node/tracker-node.component';
import { TrackerNode } from '../uimodels/trackernode.model';

@Injectable({
    providedIn:'root'
})
export class TreeHelperService{
    constructor(){
    }     
    addComponent(node:TrackerNode){
        return new ChildTrackNode(TrackerNodeComponent,node);
    }

}