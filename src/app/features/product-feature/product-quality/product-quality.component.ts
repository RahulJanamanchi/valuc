import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-quality',
  templateUrl: './product-quality.component.html',
  styleUrls: ['./product-quality.component.scss']
})
export class ProductQualityComponent implements OnInit {
  @Input() productQuality: Array<any>;
  constructor() { }

  ngOnInit() {
    if(this.productQuality){
    }
    else{
    }
  }

}
