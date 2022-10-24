import { Component, ChangeDetectionStrategy, OnInit, ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
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
import { AuthService } from '../../shared/services/auth.service';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';

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

  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.XSmall
  );
 
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
    public dialog: MatDialog,
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.getQueryParams();
    if(this.authService.getToken()) {
      this.saveSearch();
    }

    this.homeDataSub$ = this.store
      .select(selectHomeData)
      .pipe(skip(1))
      .subscribe((homeData) => {
        if (this.homes !== homeData.data.home_search.results) {
          this.homes = homeData.data.home_search.results;
        
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

  saveSearch() {
    const location = `${this.city}, ${this.state}`
    
    this.searchService.addSearch(location).subscribe(details => console.log(details))
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
 
    for (const [index, home] of this.homes.entries()) {
    
      if(typeof home.location.address.coordinate?.lat === 'number' ) {
     
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
  }

  isEmpty(obj: Record<string, never>) {
    return Object.keys(obj).length === 0;
  }

  openDialog(i: number, type: string) {
    this.isDisabled = true;

    let formattedPath = this.homes[i]
    let propertyID = formattedPath.property_id;
    
    let formattedAddress = `${formattedPath.location.address.line},  ${formattedPath.location.address.city}, ${formattedPath.location.address.state_code} ${formattedPath.location.address.postal_code}`;

    if(type === 'card') {
      formattedPath = this.homeData[i],
      propertyID = formattedPath.property_id;
      formattedAddress = `${formattedPath.location.address.line},  ${formattedPath.location.address.city}, ${formattedPath.location.address.state_code} ${formattedPath.location.address.postal_code}`;
    }
    

    

    this.searchService.propertyDetailApi(propertyID).subscribe((details) => {
      console.log(details)
      console.log(propertyID)
      //put this in a seperate function to make things look cleaner
      this.propertyDetail = details.data.property_detail;
      const dialogRef = this.dialog.open(SearchDetailComponent, {
        maxHeight: '100vh',
        maxWidth: '100vw',
        width: '60%',
        height: '100%',
        panelClass: 'custom-dialog-container',
        data: {
          address: formattedAddress,
          photo: formattedPath.primary_photo?.href,
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
          propertyID: propertyID,
          type: this.propertyDetail.display_property_type,
          yearBuilt: this.propertyDetail.prop_common.year_built,
          parking: this.propertyDetail.prop_common.garage,
          lot: this.propertyDetail.prop_common.lot_sqft
        },
      });

      const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
        if (size.matches) {
          dialogRef.updateSize('100vw', '100vh');
        } else {
          console.log('nothing happens')
        }
      });
      dialogRef.afterClosed().subscribe(() => {
        smallDialogSubscription.unsubscribe();
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
