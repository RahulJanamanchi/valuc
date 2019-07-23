import { Output, EventEmitter, Injectable } from '@angular/core';
import { TrackerNode } from '../uimodels/trackernode.model';

@Injectable({
    providedIn:'root'
})
export class ItemDetailsService{

    @Output() change: EventEmitter<TrackerNode> = new EventEmitter<TrackerNode>();
    @Output() collapseChange: EventEmitter<TrackerNode[]> = new EventEmitter<TrackerNode[]>();
    @Output() loadMultipleSuppliers: EventEmitter<TrackerNode[]> = new EventEmitter<TrackerNode[]>();
    @Output() collapseMultipleSuppliers: EventEmitter<TrackerNode> = new EventEmitter<TrackerNode>();



    expandDetails(node: TrackerNode){
        this.change.emit(node);
    }
    collapseDetails(childeNodes:TrackerNode[]){
        this.collapseChange.emit(childeNodes);
    }

    loadMultipleSuppliersInUITreeNode(nodes:TrackerNode[]){
        this.loadMultipleSuppliers.emit(nodes);
    }

    collapseMultipleSuppliersInUITreeNode(node:TrackerNode){
        this.collapseMultipleSuppliers.emit(node);
    }


}