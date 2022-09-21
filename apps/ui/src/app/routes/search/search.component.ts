import { Component, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MapGeocoder, GoogleMap } from '@angular/google-maps';
import { Store } from '@ngrx/store';
import { selectHomeData } from '../../state';
import * as SearchActions from '../../state/search';
import { HomeData } from '@starter/api-interfaces';

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
  homes!: HomeData[];
  testSubject = new BehaviorSubject<boolean>(false);
  test$ = this.testSubject.asObservable();
  city = '';
  state = '';
  limit = '';
  defaultHouse = '../../../assets/img/defaulthouse.jpeg';

  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 33.019844, lng: -96.698883 };
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  constructor(private store: Store, private geocoder: MapGeocoder, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getQueryParams();
    // this.getCoords();

    this.homeDataSub$ = this.store.select(selectHomeData).subscribe((homeData) => {
      if (!this.isEmpty(homeData)) {
        this.homes = homeData.data.home_search.results;
        console.log(this.homes);
        this.testSubject.next(true);
      }
    });
    
    this.store.dispatch(SearchActions.searchRequest({city: this.city, state: this.state}));
  }

  getQueryParams() {
    this.route.queryParams.subscribe((params) => {
      this.city = params['city'];
      this.state = params['state_code'];
      this.limit = params['limit'];
    });
  }

  getCoords() {
    this.geocoder
      .geocode({
        address: `${this.city}, ${this.state}`,
      })
      .subscribe(({ results }) => {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        this.center = {
          lat,
          lng,
        };
        this.map.panTo(this.center);
      });
  }

  isEmpty(obj: Record<string, never>) {
    return Object.keys(obj).length === 0;
  }
}
