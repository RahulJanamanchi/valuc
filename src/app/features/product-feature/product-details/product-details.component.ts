import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductData } from '../../../models/product-details';
import { KeyValue } from '../../../models/evidence-data';
import {ProductHomeComponent } from '../product-home/product-home.component';
import {EvidenceDetailsService} from '../../evidence-details/services/evidence-details.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() productDetails:KeyValue[];
  evidenceData:KeyValue[];
  isData:boolean=false;
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private evidenceDetail: EvidenceDetailsService,
    private productHome:ProductHomeComponent ) { 
      
      if(this.productHome.isLoad)
      {
        this.evidenceData = this.productHome.evidenceData;
        this.isData=true;
      }
      
  }
  evidence(keyType:string){
    this.evidenceDetail.evidenceTypeMethod(keyType);
    this.route.navigate(['usage'],{relativeTo: this.router});
  }

  // navigateToStory(){
  //   console.log("navigate to story");
  //   this.route.navigate(['story'],{relativeTo: this.router})
  // }
}

interface card {
  title: string;
  subtitle: string;
  color: string;
}