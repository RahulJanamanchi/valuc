import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import * as localforage from 'localforage';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  private data = new BehaviorSubject({'sequence': '', 'batchNumber': '', 'itemCode': ''});
  productData = this.data.asObservable();

  constructor() {
    localforage.getItem('scannedProductDetails').then((value: any) => {
      this.setData(value);
    });
  }

  setData(data: any ) {
    this.data.next(data);
  }
}
