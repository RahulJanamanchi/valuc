import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-usage',
  templateUrl: './product-usage.component.html',
  styleUrls: ['./product-usage.component.scss']
})
export class ProductUsageComponent implements OnInit {

  constructor(public router: Router,
    public route: ActivatedRoute) { }
    hidedNavbar:boolean = true;
    images:string[]=[];
    main_image:string="";
    rupee_image:string="";
    expand:string="";
    camera_image:string="";
    cost:string="";
    data:string="A T&A shirt is made from 33 individual pieces of fine cloth and 13 iridescent mother-of-pearl buttons. Rigorous quality checks are carried out at all…";
    isExpanded:boolean=false;
    ngOnInit() {
    this.images=["assets/icons/usage1_2.png","assets/icons/usage_2.png","assets/icons/usage_3.png","assets/icons/usage_4.png","assets/icons/usage_5.png"];
    this.main_image = "assets/icons/usage1_2.png";
    this.rupee_image = "assets/icons/rupee-indian.svg";
    this.camera_image = "assets/icons/Camera icon.svg";
    this.cost = "3,756";
    this.expand = "assets/icons/Expand.svg"
}
imageSelection(image:string){
  this.main_image = image;
}
scanproduct(){
  this.router.navigate(['/scan']);
}
toggleExpandImage() {
  this.isExpanded = !this.isExpanded;
}

}
