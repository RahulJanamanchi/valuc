import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { environment } from '../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }

  fetchItems() {
    return this.http.get<Item[]>(environment.apis.items);
  }

  getImageSrc(path) {
    let imageData=`${environment.apis.images}`+"/"+path;
    return imageData;
  }
}
