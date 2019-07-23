import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  /*
  *  If you want custom menus, pass in below way else default values are set if menus is not passed
  *  Array of Objects having name to display and the route links for them
  *  Example [ {name: 'home', routeLink: '/product' } ]
  */

  @Input() menus = [
    {'name': 'Home', 'routeLink': '/product'},
    {'name': 'Story', 'routeLink': '/product/story'},
    {'name': 'Journey', 'routeLink': '/trace'},
    {'name': 'Usability', 'routeLink': '/product/usage'},
    {'name': 'Reviews', 'routeLink': '/comingSoon'}
  ];

  @Input() isNavbarCollapsed = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
