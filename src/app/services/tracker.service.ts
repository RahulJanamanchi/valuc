import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  constructor(private http: HttpClient) { }

  track(batchNumber:string) {
    let requestDataObject=JSON.parse(batchNumber);
    let params = new HttpParams();
    
    params=requestDataObject.sequence ? params.append('sequence',requestDataObject.sequence) : params;
    params=requestDataObject.batchNumber ? params.append('batchNumber',requestDataObject.batchNumber) : params;
    params=requestDataObject.itemCode ? params.append('itemCode',requestDataObject.itemCode) : params;

    return this.http.get<any>(`${environment.apis.track}` , {params : requestDataObject });
  }
}
