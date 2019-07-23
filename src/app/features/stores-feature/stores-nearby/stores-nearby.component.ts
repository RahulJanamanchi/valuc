import { Component, OnInit } from '@angular/core';

const mockStores = [
  {
    name: 'Top in Town',
    location: 'Jeevan Bhima Nagar, Bangalore, Karnataka'
  },
  {
    name: 'More Supermarket',
    location: 'CV Raman Nagar, Bangalore, Karnataka'
  },
  {
    name: 'Peekay Supermarket',
    location: 'JC Nagar, Benson Town, Bangalore, Karnataka'
  },
];
for (let i = 0; i < 100; i++) {
  mockStores.push({
    name: `Mock Supermarket ${i}`,
    location: 'Fictious Nagar, Bangalore, Karnataka'
  });
}

@Component({
  selector: 'app-stores-nearby',
  templateUrl: './stores-nearby.component.html',
  styleUrls: ['./stores-nearby.component.scss']
})
export class StoresNearbyComponent implements OnInit {

  stores = mockStores;

  constructor() { }

  ngOnInit() {
  }

}
