import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { GeoserviceService } from './geoservice.service';
import { MapData, Marker } from '../../models/map-data';
import * as localforage from "localforage";


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  providers:[GeoserviceService]
})


export class MapsComponent implements OnInit {
  mapdata:MapData={"markers":[],"paths":[],"selectNode":"","selectPath":{"pathSource":"","pathDestination":""}};
  constructor(private geoService: GeoserviceService){
    
  }

  @ViewChild('gmap') gmapElement: any;
  @Input() data: MapData;
  @Input() evidenceType: string;
  @Output() sendData: EventEmitter<any> = new EventEmitter();

  map: google.maps.Map;
  directionResponses:google.maps.DirectionsResult[];

  ngOnInit() {
    this.directionResponses=[];
    
  }
  
  async ngAfterContentInit() {
    let mapProp = {
      center: new google.maps.LatLng(20.593683, 78.962883),
      zoom: 5,
      minZoom:5,
      maxZoom:7,
      disableDefaultUI: true, 
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    let mapDatastorage:any = await localforage.getItem("MapData");
    this.mapdata = JSON.parse(mapDatastorage);
    this.createMap();
  }
 maxLocation :string;
 async createMap()
 {
    for(let i in this.mapdata['markers'])
    {
      let markerLocation:string = this.mapdata['markers'][i]['location'];
      let markerLabel:Marker['label'] = this.mapdata['markers'][i]['label'];
      let response:object = await localforage.getItem(markerLocation);
      if(markerLocation == this.mapdata['selectNode'])
      {
        this.createCircle(response,markerLocation,markerLabel ,true);
      }
      else{
        this.createCircle(response,markerLocation, markerLabel,false);
      }
      // if(markerLocation === "Kolkata, India" || markerLocation === "Indore, India")
      // {
      //   this.createCircle(response,markerLocation, markerLabel,false);
      // }
    }
    for(let j in this.mapdata['paths'])
    {
      let pathSource:string = this.mapdata['paths'][j]['source'];
      let pathDestination:string = this.mapdata['paths'][j]['destination'];
      let pathDetail:string = this.mapdata['paths'][j]['pathDetails'];
      let pathData:string = pathDestination+"+"+pathSource;
      let response:google.maps.DirectionsResult = JSON.parse(String(await localforage.getItem(pathData)));
      //console.log("path responses-------->",response);
      
      if(this.mapdata['selectPath']['pathSource'] === pathSource && this.mapdata['selectPath']['pathDestination'] === pathDestination)
      {
        this.setPath(pathSource, response,"#008000",pathDetail,pathDestination);
        
      }
      else{
        this.setPath(pathSource, response,"#808080",pathDetail,"");
      }
      
    }
    this.map.setZoom(4);
 }

 circleFlag:boolean = false;
 previousSelectedCircle:google.maps.Marker;
 prevText:string;
 
 
  createCircle(response:object,loc:string, nodeLabel:string,setnode:boolean) 
  {
     let marker:google.maps.Marker;
     let imgLoc:string = 'assets/icons/lightGreenCircle.svg';
      // this.geoService.getLocation(loc).subscribe(
      // (response: any) => {
          if(setnode)
          {
            imgLoc = 'assets/icons/darkGreenCircle.svg';
            this.sendLoc(loc);
          }
       
          marker = new google.maps.Marker({
            position: response['results'][0]['geometry']['location'],
            map: this.map,
            icon: imgLoc,
            label:{text: nodeLabel,color:"white"}
          });
          if(setnode)
          {
            this.circleFlag = true;
            this.previousSelectedCircle = marker;
            this.prevText = nodeLabel;
          }
          google.maps.event.addListener(marker, 'click', (ev)=>{
             this.sendLoc(loc);
              if(this.circleFlag)
              {
                  this.previousSelectedCircle.setOptions({
                    icon: 'assets/icons/lightGreenCircle.svg',
                    label:{text:this.prevText,color:"white"}
                  });
                  this.previousSelectedCircle.setMap(this.map);
               }
              this.circleFlag = true;
              this.previousSelectedCircle = marker;
              this.prevText = nodeLabel;
              marker.setOptions({
                icon: 'assets/icons/darkGreenCircle.svg',
                label:{text:nodeLabel,color:"white"}
                });
              marker.setMap(this.map);
              
            });
          // });
  }

  sendLoc(dataToEvidence:string){
    this.sendData.emit(dataToEvidence);
  }
  
  setPath(sourceAddress:string, response:google.maps.DirectionsResult, colourpath:string, pathContent:string,infoLocation:string)
  {
    
    if(sourceAddress != "")
    {
      //let directionService = new google.maps.DirectionsService;
        let directionDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: colourpath,
                strokeWeight:3
            }
          });
        directionDisplay.setMap(this.map);
        // directionService.route({
        //     origin: sourceAddress,
        //     destination: destinationAddress,
        //     travelMode: google.maps.TravelMode.DRIVING
        //   },(response: any) => {
        //         if(google.maps.DirectionsStatus)
        //         {
                    this.directionResponses.push(response);
                    directionDisplay.setDirections(response);
                    this.clickableRoute(response,directionDisplay,pathContent,infoLocation);
                }
    //       });
    // }
   
        
  }
  
  polylines:google.maps.Polyline[]=[];
  setPolylinesAttribute = {
    strokeColour: '#0000FF',
    strokeOpacity: 0,
    strokeWeight: 12
  };
  flag:boolean=false;
  directionFlag:google.maps.DirectionsRenderer;
  infoWindowPath:google.maps.InfoWindow=null;

  clickableRoute(response:object, directionDisplay:google.maps.DirectionsRenderer,pathContent:string,pathLocation:string)
  {
    if(pathLocation !== "")
    {
        this.infoWindowPath = new google.maps.InfoWindow({
        content: pathContent,
        position: response['routes'][0].bounds.getCenter()
          });
                     
      this.flag=true;
      this.directionFlag=directionDisplay;
      this.resetPath("#008000",directionDisplay);
      this.infoWindowPath.open(this.map);
     }
      let legs:any = response['routes'][0]['legs'];
      console.log("+++++++++",response);
      for(let i:number = 0; i < legs.length; i++)
      {
          let steps = legs[i].steps;
          for(let j:number = 0; j < steps.length; j++) 
          {
              let nextSegment = steps[j].path;
              let stepPolyline = new google.maps.Polyline(this.setPolylinesAttribute);
              for(let k:number = 0; k < nextSegment.length; k++) 
              {
                  stepPolyline.getPath().push(nextSegment[k]);
                  
              }
              this.polylines.push(stepPolyline);
              console.log(">>>>>>>>",stepPolyline.getPath().getLength());
              stepPolyline.setMap(this.map);
              
              google.maps.event.addListener(stepPolyline, 'click', (evt:any)=> 
              {
                
                  if(this.flag)
                  {
                      this.infoWindowPath.close();
                      this.resetPath("#808080",this.directionFlag);
                  }
                  this.infoWindowPath = new google.maps.InfoWindow({
                      content: pathContent,
                      position: evt.latLng
                     });
                     console.log("77777777777",evt);
                  this.flag=true;
                  this.directionFlag=directionDisplay;
                  this.resetPath("#008000",directionDisplay);
                  this.infoWindowPath.open(this.map);
              })
          }
      }
  }
  
  resetPath(recolour:string,directiondisplay:google.maps.DirectionsRenderer)
  {
      directiondisplay.setOptions({
        polylineOptions: {
            strokeColor: recolour
          }
        });
      directiondisplay.setMap(this.map);
  }
  
}
