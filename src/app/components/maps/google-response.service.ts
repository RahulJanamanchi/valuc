import { Injectable, OnInit } from '@angular/core';
import { GeoserviceService } from './geoservice.service';
import { MapData, Marker } from '../../models/map-data';
import * as localforage from "localforage";



@Injectable({
  providedIn: 'root'
})
export class GoogleResponseService {

  constructor(public geoService:GeoserviceService ) { }
  data:{}={};
  mockdata : MapData;
  
  async getData()
  {
    let mapDatastorage:any = await localforage.getItem("MapData");
    this.mockdata = JSON.parse(mapDatastorage);
      for(let i in this.mockdata['markers'])
      {
          let markerLocation:string = this.mockdata['markers'][i]['location'];
          if(await localforage.getItem(markerLocation) === null)
          {
              console.log("No response in local storage ");
              this.geoService.getLocation(markerLocation).subscribe(
                (response: any) => {
                    localforage.setItem(markerLocation,response);
                });
          }
      }
      for(let j in this.mockdata['paths'])
      {
        
          let pathSource:string = this.mockdata['paths'][j]['source'];
          let pathDestination:string = this.mockdata['paths'][j]['destination'];
          let pathData:string = pathDestination+"+"+pathSource;
          
          if(await localforage.getItem(pathData) === null)
          {
            console.log("no path response");
            let directionService = new google.maps.DirectionsService;
            directionService.route({
              origin: pathSource,
              destination: pathDestination,
              travelMode: google.maps.TravelMode.DRIVING
            },(response: any) => {
                  if(google.maps.DirectionsStatus)
                  {
                    localforage.setItem(pathData,JSON.stringify(response));
                  }
            });
          }
          
      }
  }
 
}
