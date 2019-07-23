import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class GeoserviceService {

  constructor(private http: HttpClient) { }
  getLocation(term :string):Observable<any>{
    return this.http.get('https://maps.google.com/maps/api/geocode/json?address=' + term + ',+CA&key=AIzaSyC8-sr2-6UJEMkxwhT9QM2WsPmSF5jdT00');
  }

}

