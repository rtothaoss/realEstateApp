import { Component, ChangeDetectionStrategy, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, Subscription, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../shared/services/search.service';
import { MapGeocoder, GoogleMap } from '@angular/google-maps';
import { select, Store } from '@ngrx/store';
import { HttpStatus } from '@nestjs/common';
import { selectHomeData, selectSearchState, selectUserState  } from '../../state';
import * as SearchActions from '../../state/search';

@Component({
  selector: 'starter-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  apiLoaded!: Observable<boolean>;
  homeDataSub$!: Subscription;
  homeData!: Record<string, never>;
  // subscription!: Subscription;
  city = '';
  state = '';
  limit = '';
  testPrice = '$350,000';
  testString: any;

  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 33.019844, lng: -96.698883 };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  constructor(private store: Store, private geocoder: MapGeocoder, private route: ActivatedRoute, private searchService: SearchService) {
    // this.apiLoaded = this.http.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`, 'callback')
    // .pipe(
    //   map(() => true),
    //   catchError(() => of(false))
    // )
  }

  ngOnInit() {
    this.getQueryParams();
    this.getCoords();

    
    this.homeDataSub$ = this.store.select(selectHomeData)
    .subscribe((homeData) => {
        console.log(homeData)
      })
      
      this.store.dispatch(SearchActions.searchRequest())
  }

  getQueryParams() {
    this.route.queryParams.subscribe((params) => {
      this.city = params['city'];
      this.state = params['state_code'];
      this.limit = params['limit'];
    });
  }

  getCoords() {
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

  test() {
    console.log(this.testString)
  }
}
