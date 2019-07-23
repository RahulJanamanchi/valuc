import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  query = '';
  mockProduct = {
    // title: 'Comfort Cleanse',
    // brand: 'Himalaya',
    // quantity: '200 grams (100 capsules)',
    // location: 'Kshetra Agricultures, CV Raman Nagar, Kaggadaspura, Bangalore, Karnataka',
  };
  results = [];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  updateQuery(query) {
    this.query = query;
    setTimeout(() => {
      const results = [];
      const numberOfResults = Math.floor(Math.random() * 5);
      for (let i = 0; i < numberOfResults; i++) {
        results.push(`${i} for ${this.query}`);
      }
      this.results = results;
    }, 10);
  }

}
