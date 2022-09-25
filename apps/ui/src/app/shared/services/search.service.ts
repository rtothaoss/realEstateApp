import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HomeDataInterface } from '@starter/api-interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  realEstateApi(city: string, state: string) {
    const options = {
      params: { offset: '0', limit: '8', state_code: state, city: city, sort: 'newest' },
      headers: {
        'X-RapidAPI-Key': `${environment.realEstateApiKey}`,
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
      },
    };

    return this.http.get<any>('https://us-real-estate.p.rapidapi.com/v2/for-sale', options);
  }

  propertyDetailApi(propID: number) {
    console.log('we get here');
    const options = {
      params: { property_id: propID },
      headers: {
        'X-RapidAPI-Key': `${environment.realEstateApiKey}`,
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
      },
    };

    return this.http.get<any>('https://us-real-estate.p.rapidapi.com/v2/property-detail', options);
  }

  testApi() {
    return this.http.get<any>('https://dog.ceo/api/breed/hound/list');
  }

  getHoundList() {
    return this.http.get<any>('https://dog.ceo/api/breed/hound/list');
  }
}
