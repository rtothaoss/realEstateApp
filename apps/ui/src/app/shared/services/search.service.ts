import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HomeDataInterface } from '@starter/api-interfaces';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  realEstateApi(city: string, state: string) {
  
    const options = {
      params: { offset: '0', limit: '16', state_code: state, city: city, sort: 'newest' },
      headers: {
        'X-RapidAPI-Key': `${environment.realEstateApiKey}`,
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
      },
    };

    return this.http.get<any>('https://us-real-estate.p.rapidapi.com/v2/for-sale', options);
  }

  propertyDetailApi(propID: string) {
    const options = {
      params: { property_id: +propID },
      headers: {
        'X-RapidAPI-Key': `${environment.realEstateApiKey}`,
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
      },
    };

    return this.http.get<any>('https://us-real-estate.p.rapidapi.com/v2/property-detail', options);
  }

  saveHouse(body: any) {
    return this.http.post(`${this.baseUrl}/savedhomes`, body);
  }

  savedHomes() {
    return this.http.get<any>(`${this.baseUrl}/savedhomes`);
  }

  checkForSavedHome(propertyId: string) {
    return this.http.get<any>(`${this.baseUrl}/savedhomes/${propertyId}`);
  }

  deleteHome(propertyId: string) {
    return this.http.delete<any>(`${this.baseUrl}/savedhomes/${propertyId}`);
  }

  addSearch(location: string) {
    const data = {
      location,
    };

    return this.http.post(`${this.baseUrl}/savedsearches`, data);
  }

  savedSearches() {
    return this.http.get<any>(`${this.baseUrl}/savedsearches`);
  }

  deleteSearch(id: number) {
    return this.http.delete(`${this.baseUrl}/savedsearches/${id}`);
  }

  userHome() {
    console.log('return users home');
  }
}
