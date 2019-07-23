import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { StoryCategory} from '../../../models/storyInterface';
const jsonData : StoryCategory[]= require('../../../../assets/json/storyData.json');
import {StoryDetailsService} from '../../../components/story-button/story-service/story-details.service';

@Component({
  selector: 'app-product-story',
  templateUrl: './product-story.component.html',
  styleUrls: ['./product-story.component.scss']
})
export class ProductStoryComponent implements OnInit {
  // stories:any={};
  // desinername="Branda Blystone";
  // designerImage="assets/icons/female-model.png";
  // hidedNavbar = true;
  designerWebsiteURL:any;

  constructor(private router: Router,private sanitizer:DomSanitizer, private storyService:StoryDetailsService) { }
  storyData:StoryCategory[];
  storydata:StoryCategory={"title":"",
    "logoUrl":"",
    "imageUrl":"",
    "description":"",
    "story": []};
  isStoryData:boolean=false;
  pageFlag:boolean=false;

  ngOnInit() {
    this.designerWebsiteURL=this.sanitizer.bypassSecurityTrustUrl("http://nvipani.com");

    
       
    this.storyData = jsonData;
    this.isStoryData = true;
    this.storyService.storyDetails.subscribe((data)=>{
        this.storydata = data;
        this.gotoRoute('/product/story');
    });
  }

  getStyle() {
    return { 'width.px':20, 'height.px':20};
  }
  getWebsiteStyle() {
    return { 'width.px':30, 'height.px':30, 'border-radius':'50px','position':'relative','top':'10px', 'left':'10px' };
  }
  gotoRoute(url) {
    this.router.navigateByUrl(url)
  }

  getImgURL(path:String){
    return this.sanitizer.bypassSecurityTrustStyle(''+
      `url("${path}")`
    );
  }
  // toggleMenu() {
  //   this.hidedNavbar = !this.hidedNavbar;
  // }
  // openDesignerWebsite(){
    
  // }
}
