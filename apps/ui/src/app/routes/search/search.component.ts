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
  lat!:string;
  lng!: string;
  defaultHouse = '../../../assets/img/defaulthouse.jpeg';
  markers = [
    {
      position: {lat: 32.895908, lng: -96.861772 },
      label: {
        color: 'red',
        text: 'Marker label'
      },
      title: 'Marker title',
      info: 'Marker info',
      options: {
        animation: google.maps.Animation.BOUNCE,
      }
    }
  ];

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

    this.homeDataSub$ = this.store.select(selectHomeData).subscribe((homeData) => {
      if (!this.isEmpty(homeData)) {
        this.homes = homeData.data.home_search.results;
        console.log(this.homes);
        this.testSubject.next(true);
      }
    });
    
    this.store.dispatch(SearchActions.searchRequest({city: this.city, state: this.state}));

    this.centerMap();

  }

  getQueryParams() {
    this.route.queryParams.subscribe((params) => {
      this.city = params['city'];
      this.state = params['state_code'];
      this.limit = params['limit'];
      this.lat = params['lat'];
      this.lng = params['lng'];
    });
  }

  centerMap() {
    const lat = parseFloat(this.lat)
    const lng = parseFloat(this.lng)

    this.center = {
      lat,
      lng
    }
    this.map.panTo(this.center)
  }


  // addMarkers() {
  //   this.map.M
  // }

  isEmpty(obj: Record<string, never>) {
    return Object.keys(obj).length === 0;
  }
}
