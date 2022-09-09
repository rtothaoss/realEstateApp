import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'starter-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit{

  apiLoaded: Observable<boolean>;

  zoom = 12;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  constructor(http: HttpClient) {
    this.apiLoaded = http.jsonp(`https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`, 'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false))
    )
  }


  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  // zoomIn() {
  //   if (this.zoom < this.options.maxZoom) this.zoom++;
  // }

  // zoomOut() {
  //   if (this.zoom > this.options.minZoom) this.zoom--;
  // }

  
}
