import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ProductDetailsService} from '../../../services/product-details.service';

@Component({
  selector: 'app-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrls: ['./product-landing.component.scss']
})
export class ProductLandingComponent implements OnInit {

  code$: string;

  constructor(private route: ActivatedRoute, private product: ProductDetailsService) { }

  ngOnInit() {
    this.product.productData.subscribe((data) => this.code$ = data.batchNumber);
  }

}
