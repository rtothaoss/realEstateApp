import { Component, ChangeDetectionStrategy, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../shared/services/search.service';
import { MapGeocoder, GoogleMap } from '@angular/google-maps';


@Component({
  selector: 'starter-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit{
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  apiLoaded!: Observable<boolean>;
  city = '';
  state = '';
  limit = '';
  testPrice = '$350,000'
  


  zoom = 12;
  center: google.maps.LatLngLiteral = {lat: 33.019844, lng: -96.698883}
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };


  constructor(private http: HttpClient, private geocoder: MapGeocoder, private route: ActivatedRoute) {
    // this.apiLoaded = this.http.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`, 'callback')
    // .pipe(
    //   map(() => true),
    //   catchError(() => of(false))
    // )
    

  }


  ngOnInit() {


    this.route.queryParams.subscribe(params => {
      this.city = params['city']
      this.state = params['state_code']
      this.limit = params['limit']
    })
    
    // this.geocoder
    // .geocode({
    //   address: `${this.city}, ${this.state}`,
    // })
    // .subscribe(({ results }) => {
    //   const lat = results[0].geometry.location.lat();
    //   const lng = results[0].geometry.location.lng();
    //  this.center = {
    //   lat,
    //   lng
    //  }
  
     
    //  this.map.panTo(this.center)
    // });

  }

    
  initMap(){
    console.log('this worked')
  }


  

  
}
