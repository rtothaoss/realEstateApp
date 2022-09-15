import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient,) {}

  realEstateApi() {
    console.log('we get here')
    const options = {
      params: { offset: '0', limit: '10', state_code: 'MI', city: 'Detroit', sort: 'newest' },
      headers: {
        'X-RapidAPI-Key': 'cf5fb7698cmsh458bbee859c8181p11d143jsnc5a80b9e6e22',
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
      },
    };
    
    return this.http.get('https://us-real-estate.p.rapidapi.com/v2/for-sale', options)
  }


}
