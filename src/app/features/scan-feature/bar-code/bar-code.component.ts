import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-code',
  templateUrl: './bar-code.component.html',
  styleUrls: ['./bar-code.component.scss']
})
export class BarCodeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
