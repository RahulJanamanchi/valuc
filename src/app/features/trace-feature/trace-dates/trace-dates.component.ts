import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trace-dates',
  templateUrl: './trace-dates.component.html',
  styleUrls: ['./trace-dates.component.scss']
})
export class TraceDatesComponent implements OnInit {

  dates = [
    '9 Jan',
    '18 Jan',
    '24 Jan',
    '11 Feb',
    '14 Feb',
    '19 Feb'
  ];

  constructor() { }

  ngOnInit() {
  }

  getDates() {
    return this.dates.map(d => d.split(' ')).reverse();
  }

}
