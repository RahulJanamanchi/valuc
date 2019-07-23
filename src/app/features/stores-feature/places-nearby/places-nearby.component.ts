import { Component, OnInit } from '@angular/core';

const mockPlaces = [
  {
    location: "Indira Nagar",
    numberOfStores: 28
  },
  {
    location: "KR Puram",
    numberOfStores: 19
  },
  {
    location: "Madiwala",
    numberOfStores: 20
  },
  {
    location: "JC Nagar",
    numberOfStores: 6
  },
  {
    location: "Bayyapanhalli",
    numberOfStores: 56
  }
];
for (let i = 0; i < 50; i++) {
  mockPlaces.push({
    location: `Fictious Nagar ${i}`,
    numberOfStores: Math.ceil(Math.random() * 101)
  });
}

@Component({
  selector: 'app-places-nearby',
  templateUrl: './places-nearby.component.html',
  styleUrls: ['./places-nearby.component.scss']
})
export class PlacesNearbyComponent implements OnInit {

  places = mockPlaces;

  constructor() { }

  ngOnInit() {
  }

}
