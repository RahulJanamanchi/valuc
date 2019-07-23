import { Type } from '@angular/core';
import { TrackerNode } from '../../uimodels/trackernode.model';

export class ChildTrackNode {
    constructor(public component: Type<any>, public data: TrackerNode) {}
}