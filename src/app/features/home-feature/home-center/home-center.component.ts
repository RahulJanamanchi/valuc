import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Brand } from '../../../models/brand';
import {environment} from '../../../../environments/environment';
import { homePageConfiguration } from '../../../../environments/homePageConfiguration';

@Component({
  selector: 'app-home-center',
  templateUrl: './home-center.component.html',
  styleUrls: ['./home-center.component.scss']
})
export class HomeCenterComponent implements OnInit {
  @Input() logo:string;
  @Input() slogan:string;
  @Input() companyName:string;
  Slogan:string;
  Slogan2:string;
  Slogan3:string;
  isProduction: boolean;
  constructor() {
    this.isProduction = environment.production;
  }

  ngOnInit() {
    this.Slogan = homePageConfiguration.Slogan;
    //this.Slogan2 = homePageConfiguration.Slogan2;
  }
  getLogo() {
    return {
    'width.':75,
    'height.px':75,
    'background-color':'transparent',
    'margin-right.vw': -60,
  
  
  };
}

}
