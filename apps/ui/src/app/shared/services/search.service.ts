import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HomeDataInterface } from '@starter/api-interfaces';
import { environment } from '../../../environments/environment';

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

  propertyDetailApi(propID: number) {
    const options = {
      params: { property_id: propID },
      headers: {
        'X-RapidAPI-Key': `${environment.realEstateApiKey}`,
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
      },
    };

    return this.http.get<any>('https://us-real-estate.p.rapidapi.com/v2/property-detail', options);
  }

  saveHouse() {
    console.log('this house was saved')
  }

  savedHomes() {
    return this.http.get<any>(`${this.baseUrl}/savedsearches`)
  }

  savedSearches() {
    console.log('return saved searches for a user')
  }

  userHome() {
    console.log('return users home')
  }

  
}

