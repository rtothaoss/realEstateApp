import { Component, ChangeDetectionStrategy, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, skip, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MapGeocoder, GoogleMap } from '@angular/google-maps';
import { Store } from '@ngrx/store';
import { selectHomeData } from '../../state';
import * as SearchActions from '../../state/search';
import { HomeData } from '@starter/api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { SearchDetailComponent } from './search-detail/search-detail.component';

export interface MarkersInterface {
  position: { lat: number; lng: number };
  label: {
    color: string;
  };
  title: string;
  options: {
    animation: google.maps.Animation.DROP;
  };
}

@Component({
  selector: 'starter-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  apiLoaded!: Observable<boolean>;
  homeDataSub$!: Subscription;
  homes!: HomeData[];
  testSubject = new BehaviorSubject<boolean>(false);
  test$ = this.testSubject.asObservable();
  city = '';
  state = '';
  limit = '';
  lat!: string;
  lng!: string;
  defaultHouse = '../../../assets/img/defaulthouse.jpeg';
  markers: MarkersInterface[] = [];

  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 33.019844, lng: -96.698883 };
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  constructor(
    private store: Store,
    private geocoder: MapGeocoder,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getQueryParams();

    this.homeDataSub$ = this.store
      .select(selectHomeData)
      .pipe(skip(1))
      .subscribe((homeData) => {
        if (this.homes !== homeData.data.home_search.results) {
          this.homes = homeData.data.home_search.results;
          console.log(this.homes)
          this.addMarkers();
          this.testSubject.next(true);
        }
      });
    this.store.dispatch(SearchActions.searchRequest({ city: this.city, state: this.state }));
  }

  getQueryParams() {
    this.route.queryParams.subscribe((params) => {
      this.city = params['city'];
      this.state = params['state_code'];
      this.limit = params['limit'];
      this.lat = params['lat'];
      this.lng = params['lng'];
      this.centerMap();
    });
    
  }

  centerMap() {
    const lat = parseFloat(this.lat);
    const lng = parseFloat(this.lng);

    this.center = {
      lat,
      lng,
    };
    this.map.panTo(this.center);
  }

  addMarkers() {
    console.log('running addMarkers');
    for (const [index, home] of this.homes.entries()) {
      this.markers.push({
        position: { lat: home.location.address.coordinate.lat, lng: home.location.address.coordinate.lon },
        label: {
          color: 'red',
        },
        title: index.toString(),

        options: {
          animation: google.maps.Animation.DROP,
        },
      });
    }
  }

  isEmpty(obj: Record<string, never>) {
    return Object.keys(obj).length === 0;
  }

  openDialog(i: number) {
    console.log('this is openDialog');


    const formattedAddress = `${this.homes[i].location.address.line},  ${this.homes[i].location.address.city}, ${this.homes[i].location.address.state_code} ${this.homes[i].location.address.postal_code}`;

    const dialogRef = this.dialog.open(SearchDetailComponent, {
      width: '1100px',
      height: '900px',
      data: {
        address: formattedAddress,
        photo: this.homes[i].primary_photo.href,
        price: this.homes[i].list_price,
        beds: this.homes[i].description.beds,
        bath: this.homes[i].description.baths_full,
        sqft: this.homes[i].description.sqft,
        marker: {
          lat: this.homes[i].location.address.coordinate.lat,
          lng: this.homes[i].location.address.coordinate.lon
        }
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy(): void {
      this.homeDataSub$.unsubscribe();
  }
}
