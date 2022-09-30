import { Component, ChangeDetectionStrategy, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, skip, Subscription, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MapGeocoder, GoogleMap, MapMarker, MapInfoWindow } from '@angular/google-maps';
import { Store } from '@ngrx/store';
import { selectHomeData } from '../../state';
import * as SearchActions from '../../state/search';
import { HomeData, PropertyDetail } from '@starter/api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SearchService } from '../../shared/services/search.service';

export interface MarkersInterface {
  position: { lat: number; lng: number };
  label: {
    color: string;
    text: string;
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
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  apiLoaded!: Observable<boolean>;
  homeDataSub$!: Subscription;
  homes!: HomeData[];
  loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  city = '';
  state = '';
  limit = '';
  lat!: string;
  lng!: string;
  defaultHouse = '../../../assets/img/defaulthouse.jpeg';
  markers: MarkersInterface[] = [];
  propertyDetail!: PropertyDetail;
  isDisabled = false;
  homeData! : HomeData[];
  page = 0;
  size = 8;
  infoContent!: HomeData

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
    private searchService: SearchService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getQueryParams();
   

    this.homeDataSub$ = this.store
      .select(selectHomeData)
      .pipe(skip(1))
      .subscribe((homeData) => {
        if (this.homes !== homeData.data.home_search.results) {
          this.homes = homeData.data.home_search.results;
          console.log(this.homes);
          this.getData({pageIndex: this.page, pageSize: this.size});
          this.addMarkers();
          this.loadingSubject.next(true);
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
          text: 'This is a marker label',
        },
        title: home.list_price.toString(),
        options: {
          animation: google.maps.Animation.DROP,
        },
      });
    }
  }

  isEmpty(obj: Record<string, never>) {
    return Object.keys(obj).length === 0;
  }

  openDialog(i: number, type: string) {
    this.isDisabled = true;
    console.log('this is openDialog');
    console.log(type)

    let formattedPath = this.homes[i]
    let propertyID = +formattedPath.property_id;
    let formattedAddress = `${formattedPath.location.address.line},  ${formattedPath.location.address.city}, ${formattedPath.location.address.state_code} ${formattedPath.location.address.postal_code}`;

    if(type === 'card') {
      formattedPath = this.homeData[i],
      propertyID = +formattedPath.property_id;
      formattedAddress = `${formattedPath.location.address.line},  ${formattedPath.location.address.city}, ${formattedPath.location.address.state_code} ${formattedPath.location.address.postal_code}`;
    }
    

    

    this.searchService.propertyDetailApi(propertyID).subscribe((details) => {
      //put this in a seperate function to make things look cleaner
      console.log(details);
      this.propertyDetail = details.data.property_detail;
      const dialogRef = this.dialog.open(SearchDetailComponent, {
        width: '1100px',
        height: '900px',
        data: {
          address: formattedAddress,
          photo: formattedPath.primary_photo.href,
          price: formattedPath.list_price,
          beds: formattedPath.description.beds,
          bath: formattedPath.description.baths_full,
          sqft: formattedPath.description.sqft,
          marker: {
            lat: formattedPath.location.address.coordinate.lat,
            lng: formattedPath.location.address.coordinate.lon,
          },
          overview: this.propertyDetail.prop_common.description,
          photos: this.propertyDetail.photos,
          propertyHistory: this.propertyDetail.property_history,
          mortgageInfo: this.propertyDetail.mortgage.estimate,
          schools: this.propertyDetail.schools,
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
      this.isDisabled = false;
    });
  }

  getData(obj: any) {
    let index=0
       const startingIndex=obj.pageIndex * obj.pageSize
       const endingIndex=startingIndex + obj.pageSize;

    this.homeData = this.homes.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });

    console.log(this.homeData)
  }

  openInfo(marker: any, i: number) {
    this.infoContent = this.homes[i]
    this.infoWindow.open(marker)
  }

  closeInfo() {
    this.infoWindow.close()
  }

  ngOnDestroy(): void {
    this.homeDataSub$.unsubscribe();
  }
}
