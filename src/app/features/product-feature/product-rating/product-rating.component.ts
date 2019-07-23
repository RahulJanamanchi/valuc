import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer,private router: Router) { }
  rate:number = 3.4;
  ratingImage = "assets/icons/review.png";
  stories:any={};
  ngOnInit() {
    this.stories=[
      {
        "stars": "5",
        "heading":"Ragini Kumari",
        "description": "Affordable Style Statement Bag was delivered within 4 days, was housed in a beautiful drawstring bag and smelled like real leather too! Even though it is faux leather, I did appreciate the leather scent added to the bag. It added a touch of luxury to this affordable bag. The bag itself looks extremely stylish, is of very good quality and seems durable. I’ve been using it for less than a week and it’s been stain resistant for the most part."
      },
      {
        "stars": "4",
        "heading":"Anand Bajaj",
        "description":"Worth the money The product is worth the money spent, comes in a very classy packaging. Bottom line is dont expect it to be a LV bag, but for 1600, this is best you can get in the market. "
      },
      {
        "stars": "4.2",
        "heading":"Customer 3",
        "description":"Pure Leather I love leather products and this is an amazing item in my collection. I love the look and feel of the product. Of course it's not worth the MRP so post DISC the price was reasonable."
      }
  ];
  }
  getImgURL(path:String){
    return this.sanitizer.bypassSecurityTrustStyle(''+
      `url("${path}")`
    );
  }
  gotoRoute(url) {
    this.router.navigateByUrl(url)
  }
}
