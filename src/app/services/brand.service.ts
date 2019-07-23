import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../models/brand';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  fetchBrands() {
    return this.http.get<Brand[]>(environment.apis.brands);
  }

}
