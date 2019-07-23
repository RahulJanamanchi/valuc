import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import * as localforage from "localforage";






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'value-check';

  constructor(updates: SwUpdate) {
    updates.available.subscribe(() => {
      updates.activateUpdate().then(() => {
        document.location.reload();
      });
    });

  }

  ngOnInit(): void {
    localforage.setItem('somekey', 'some value').then(function (value) {
      // Do other things once the value has been saved.
      console.log("Set value"+value);
  }).catch(function(err) {
      // This code runs if there were any errors
      console.log(err);
  });

  }
}
