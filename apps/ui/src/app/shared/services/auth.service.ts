import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Login, UserUI } from '@starter/api-interfaces';
import { Store } from '@ngrx/store';
import { selectUser, logoutUser } from '../../state'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = `${environment.apiUrl}/auth`;

  private tokenExpirationTimer: any;

  user$ = this.store.select(selectUser);

  constructor(private http: HttpClient, private store: Store) {}

  getToken() {
    const userData = localStorage.getItem('starter-user');
    if (!userData) {
      return null;
    }

    const token = JSON.parse(userData)['user']['accessToken'];

    return token;
  }

  get isLoggedIn(): boolean {
    const authToken = this.getToken()
   console.log('this is authToken in getIsLoggedIn() ' + authToken)
    return authToken !== undefined ? true : false
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
  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(logoutUser());
    }, expirationDuration)
}

  //Add clearLogoutTimer Here

  clearLogoutTimer() {
    if(this.tokenExpirationTimer) {
        clearTimeout(this.tokenExpirationTimer);
        this.tokenExpirationTimer = null;
    }
}

  login(data: Login) {
    return this.http.post<UserUI>(`${this.baseUrl}/login`, data);
  }

  register(data: Login) {
    return this.http.post<UserUI>(`${this.baseUrl}/register`, data);
  }
}
