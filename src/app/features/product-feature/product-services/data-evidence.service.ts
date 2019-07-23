import { Injectable } from '@angular/core';
import {KeyValue,Location,NodeEvidence,ProductEvidence,Product} from '../../../models/evidence-data';
import { TrackerNode } from '../../trace-feature/uimodels/trackernode.model';
import { Inventories } from '../../trace-feature/uimodels/inventories.model';

import { CompanyData } from '../../trace-feature/uimodels/companydata.model';
import { BusinessUnitData } from '../../trace-feature/uimodels/businessunitdata.model';
import { Address } from '../../trace-feature/uimodels/address.model';
import { MapData,Marker,Path } from '../../../models/map-data';
import * as localforage from "localforage";
import { Evidence } from '../../trace-feature/uimodels/evidence.model';
@Injectable({
  providedIn: 'root'
})
export class DataEvidenceService {
  evidenceData:KeyValue[]=[];
  mapData:MapData = {"markers":[],"paths":[],"selectNode":"","selectPath":{"pathSource":"","pathDestination":""}};
  markerArray:Marker[]=[];
  pathArray:Path[]=[];
  numberEvidences:number;
  constructor() { }

  async getData(trackernode:TrackerNode)
  {
   
    this.traceServerData(trackernode);
    this.mapData.markers = this.markerArray;
    this.mapData.paths = this.pathArray;
    if(await localforage.getItem("MapData") === null)
    {
    localforage.setItem("MapData",JSON.stringify(this.mapData));
    }
    return this.evidenceData;
  }
  
  traceServerData(node:TrackerNode)
  {
      this.setData(node.inventories,node.companyData);
      this.createConversionDetail(node.inventories);
      if(node.children)
      {
        for(let child of node.children)
        {
          this.setData(child.inventories,child.companyData);
          this.setMapPath(node.companyData,child.companyData);
          this.createConversionDetail(child.inventories);
          for(let order of child.orders)
          {
            this.setMapPath(child.companyData,order.companyData);
            this.traceServerData(order);
          }
        }
      }
      
  }
  setMapPath(companydata:CompanyData,childCompanydata:CompanyData)
  {
    let pathobject:Path = {"source":"","destination":"","pathDetails": ""};
    pathobject.destination = this.getAddressObject(companydata).address;
    pathobject.source = this.getAddressObject(childCompanydata).address;
    pathobject.pathDetails = "";
    this.pathArray.push(pathobject);
  }
  setData(inventorydata:Inventories[],companydata:CompanyData)
  {
    this.numberEvidences=0;
    let arrKeyValue:string[]=[];
    for(let data of companydata.businessUnit.evidences)
    {
      let evidencetype:string = data.evidenceType;
      arrKeyValue.push(evidencetype);
      this.createEvidenceData(data,inventorydata,companydata);
    }
    for(let idata of inventorydata)
    {
      for(let invdata of idata.inventory.evidences)
      {
          let evidencetype:string = invdata.evidenceType;

          if( !arrKeyValue.includes(evidencetype))
          {
            this.createEvidenceData(invdata,inventorydata,companydata);
          }
      }
    }
    //for map data 
    let marker:Marker={"location":"","label":""};
    marker.label = String(this.numberEvidences);
    marker.location = this.getAddressObject(companydata).address;
    this.markerArray.push(marker);
  }

  createEvidenceData(evidence:Evidence,inventorydata:Inventories[],companydata:CompanyData)
  {
    let locationData:Location = this.setEvidenceData(evidence.evidenceType,companydata,inventorydata);
    let present:boolean = true;
      for(let i in  this.evidenceData)
      {
          if(this.evidenceData[i].type === evidence.evidenceType)
          {
              this.evidenceData[i].location.push(locationData);
          }
          else{
              present = false;
          }
      }
      if(present === false || this.evidenceData.length === 0)
      {
        let keyValueObject:KeyValue = {"type": "","color": "","imageUrl": "","location": []};
        let locationArr:Location[]=[];
        locationArr.push(locationData);
        keyValueObject.type = evidence.evidenceType;
        keyValueObject.color = "#F20000";
        keyValueObject.imageUrl = "assets/icons/ecology.svg";
        keyValueObject.location = locationArr;
        this.evidenceData.push(keyValueObject);
      }
  } 

  setEvidenceData(evidencetype:string,companydata:CompanyData,inventorydata:Inventories[])
  {
    let locationObject:Location = this.getAddressObject(companydata);
    locationObject.businessUnit.unitName = companydata.company.name;
    if(companydata.company.addresses.length>0)
    {
      locationObject.businessUnit.unitCity = companydata.company.addresses[0].city;
    }
    else{
      locationObject.businessUnit.unitCity = "";
    }
    locationObject.businessUnit.unitImage = companydata.company.profileImageURL;
    locationObject.nodeLevel = this.setNodelevelDetails(evidencetype,companydata.businessUnit);
    locationObject.productLevel = this.setProductLevelDetails(evidencetype,inventorydata);
    locationObject.numberEvidences = this.numberEvidences;
    return locationObject;
  }
  getAddressObject(companydata:CompanyData)
  {
    let locationObject:Location={"address": "","numberEvidences": null,"businessUnit": {"unitName": "","unitImage": "","unitCity": ""},"nodeLevel": [],"productLevel": []};
    if(companydata.company.addresses.length>0)
    {
      let address:Address = companydata.company.addresses[0];
      let locationString:string = String(address.addressLine+", "+address.city+", "+address.state+", "+address.country);
      locationObject.address = locationString;
    }
    else{
      locationObject.address = "";
    }
    
    return locationObject;
  }
  setProductLevelDetails(evidencetype:string,inventoryData:Inventories[])
  {
    let productArr:Product[]=[];
    let productLevelEvidences:ProductEvidence[]=[];
      for(let inventorydetails of inventoryData)
      {
        for(let evidence of inventorydetails.inventory.evidences )
        {
          if(evidencetype === evidence.evidenceType)
          {
          for(let keyclassify of evidence.evidenceClassification)
          {
            this.numberEvidences++;
            let productData:ProductEvidence={"subType": "","description": "","images": [],"videos": [],"document": [],"graphs": []};
            productData.description = keyclassify.description;
            productData.subType = keyclassify.name;
            productData.images = keyclassify.gallery.images;
            productData.videos = keyclassify.gallery.videos;
            productData.document = keyclassify.certificates;
            productLevelEvidences.push(productData);
          }
            break;
          }
        }
        let product:Product = {"product":"","brandName":"","productImage": "","productEvidences":[]};
        product.product = inventorydetails.inventory.productName;
        product.brandName = inventorydetails.inventory.brandName;
        product.productImage = inventorydetails.inventory.gallery.images[0].imageURL;
        product.productEvidences = productLevelEvidences;
        productArr.push(product);
      }
      return productArr;
  }
  setNodelevelDetails(evidencetype:string,businessunit:BusinessUnitData)
  {
      let nodeLevelEvidences:NodeEvidence[]=[];
      for(let keyvalues of businessunit.evidences)
      {
          if(keyvalues.evidenceType === evidencetype)
          {
              for(let keyclassify of keyvalues.evidenceClassification)
              {
                  this.numberEvidences++;
                  let nodeData:NodeEvidence= {"subType": "","description": "","images": [],"videos": [],"documents": []};
                  nodeData.description = keyclassify.description;
                  nodeData.subType = keyclassify.name;
                  nodeData.images = keyclassify.gallery.images;
                  nodeData.videos = keyclassify.gallery.videos;
                  nodeData.documents = keyclassify.certificates;
                  nodeLevelEvidences.push(nodeData);
              }
              break;
          }
      }
      return nodeLevelEvidences;
  }
  createConversionDetail(inventoryArr:Inventories[])
  {
    for(let inventory of inventoryArr)
    {
      for(let stockmaster of inventory.stockMasters)
      {
        for(let conversiondata of stockmaster.conversions )
        {
          
          this.setData(conversiondata.inventories,conversiondata.companyData);
          if(conversiondata.children)
          {
            for(let children of conversiondata.children)
            {
              this.setMapPath(conversiondata.companyData,children.companyData);
              this.traceServerData(children);
            }
          }
          
        }
      }
   }
  }
}

