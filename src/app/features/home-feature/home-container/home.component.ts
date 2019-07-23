import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, Brand, Item } from '../../../models';
import {
  RootStoreState,
  AuthSelectors, BrandSelectors, ItemSelectors,
  BrandActions, ItemActions
} from '../../../root-store';
import { Router, ActivatedRoute } from '@angular/router';
import { homePageConfiguration } from '../../../../environments/homePageConfiguration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: ActivatedRoute, private route: Router ) {}

  logo: string;
  companyName: string;
  Slogan: string;
  backgroundimg: string;
  buttonLeft: string;
  buttonRight: string;

  ngOnInit() {
    //this.logo = homePageConfiguration.logo;
    this.companyName = homePageConfiguration.companyName;
    this.Slogan = homePageConfiguration.Slogan;
    this.backgroundimg = homePageConfiguration.background;
    //this.buttonLeft = homePageConfiguration.buttonColorleft;
    //his.buttonRight = homePageConfiguration.buttonColorright;
  }
  product() {
    this.route.navigate(['scan']);
  }
  gotoSettings() {
    this.route.navigate(['settings']);
  }

  styleBackGround(): Object {
    return {
      'background-image': 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9)),url(' + this.backgroundimg + ')',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-attachment': 'fixed',
      
    };
  }
  
}
