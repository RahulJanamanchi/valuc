import { Component, OnInit, Input } from '@angular/core';
import { EvidenceDetailsService } from '../services/evidence-details.service';
import { Product } from '../../../models/evidence-data';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() evidenceType;

  products: Product[];
  productLength:number;
  constructor(private evidenceDetailsService: EvidenceDetailsService) { 
    
  }

  ngOnInit() {
    this.evidenceDetailsService.products.subscribe(prods =>
      {
        if(prods!=[] && prods!=undefined){
          this.products = prods;
          this.productLength = this.products.length;
        }
      });
  }

}
