import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trace-stats',
  templateUrl: './trace-stats.component.html',
  styleUrls: ['./trace-stats.component.scss']
})
export class TraceStatsComponent implements OnInit {

  items = [
    { label: 'Owners', count: 9 },
    { label: 'Events', count: 4 },
    { label: 'Docs', count: 7 },
    { label: 'Locations', count: 9 }
  ];

  constructor() { }

  ngOnInit() {
  }

  getIcon(label) {
    return label.toLowerCase();
  }

}
