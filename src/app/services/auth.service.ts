import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials, User } from '../models/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: Credentials) {
    return this.http.post<User>(environment.apis.login, credentials);
  }

  getToken() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    return user && user.userName;
  }

}
