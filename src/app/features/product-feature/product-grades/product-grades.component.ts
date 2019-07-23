import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-grades',
  templateUrl: './product-grades.component.html',
  styleUrls: ['./product-grades.component.scss']
})
export class ProductGradesComponent implements OnInit {

  @Input() productGrades: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
