import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HomeComponent} from '../home-container/home.component'; 
import { homePageConfiguration } from '../../../../environments/homePageConfiguration';

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent implements OnInit {
  Slogan:string;
  camImg:string;


  @Output() submit = new EventEmitter<MouseEvent>();

  constructor(private router: ActivatedRoute,private route: Router){}

  ngOnInit() {
    this.Slogan=homePageConfiguration.Slogan;
    this.camImg=homePageConfiguration.camImg;
  }
  product(){
    this.route.navigate(['/scan']);
  }
  backgroundImg():object{
    return {
      'background-image':(this.camImg)
    }

    }


   // getStyle() {
    //  return { 'width.px':25, 'height.px':25, 'background-color':'white', 'border-radius':'50px' ,'padding':'20px'};
      
   // }

  }
