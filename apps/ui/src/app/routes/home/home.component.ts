import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'starter-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent {

  homeData = {}
  

  constructor(private http: HttpClient, private _route: ActivatedRoute, private _router: Router) {}

  testButton(){
    const options = {
      params: {offset: '0', limit: '42', state_code: 'MI', city: 'Detroit', sort: 'newest'},
      headers: {
        'X-RapidAPI-Key': 'cf5fb7698cmsh458bbee859c8181p11d143jsnc5a80b9e6e22',
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
      },

    }
    this.http.get('https://us-real-estate.p.rapidapi.com/v2/for-sale', options).subscribe((data) => {this.homeData = data})
  }

  show() {
    console.log(this.homeData);
  }

  search(){
    // changes the route without moving from the current view or
    // triggering a navigation event,
    this._router.navigate(['/search'], {
     relativeTo: this._route,
     queryParams: {
       city: 'Dallas',
       state_code: 'TX',
       limit: '20'
     },
     queryParamsHandling: 'merge',
     // preserve the existing query params in the route
     skipLocationChange: false
     // do not trigger navigation
   });
  }

}
