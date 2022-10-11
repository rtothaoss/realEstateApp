import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Login, UserUI } from '@starter/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  getToken() {
    const userData = localStorage.getItem('starter-user');
    if (!userData) {
      return null;
    }

    const token = JSON.parse(userData)['user']['accessToken'];

    return token;
  }

  verifyTokenExpirationRemoval() {
    const expirationToken = localStorage.getItem('expirationTime');
    if (!expirationToken) {
      return null;
    }
    const tokenExpirationDate = JSON.parse(expirationToken);

    const newDate = new Date(tokenExpirationDate)
    const now = new Date();

    if(now > newDate) {
      return true
    } else {
      return false
    }
  }

  //Add setLogoutTimer Here

  //Add clearLogoutTimer Here

  login(data: Login) {
    return this.http.post<UserUI>(`${this.baseUrl}/login`, data);
  }

  register(data: Login) {
    return this.http.post<UserUI>(`${this.baseUrl}/register`, data);
  }
}
