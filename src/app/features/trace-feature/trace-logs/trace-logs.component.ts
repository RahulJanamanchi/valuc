import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { TreeHelperService } from '../services/tree-helper.service';
import { ChildTrackNode } from './tracker-tree/child-node';


@Component({
  selector: 'app-trace-logs',
  templateUrl: './trace-logs.component.html',
  styleUrls: ['./trace-logs.component.scss']
})
export class TraceLogsComponent implements OnInit {

  @Input() node: ChildTrackNode;

  constructor(private treeHelperService: TreeHelperService) { }

  ngOnInit() {
  }

  isSingleIcon({ type }) {
    return ['transport', 'transform'].includes(type);
  }
  getIcon({ type }) {
    return type === 'transform' ? 'covert' : 'events';
  }
  getImageSrc(path) {
    return `${environment.apis.images}/${path}`;
  }
}