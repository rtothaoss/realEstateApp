import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  address: string;
  photo: string;
  price: number;
  beds: string;
  bath: string;
  sqft: string;
  overview: string;
  marker: {
    lat: number;
    lng: number;
  }
}

@Component({
  selector: 'starter-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss'],
})
export class SearchDetailComponent {

  center: google.maps.LatLngLiteral = { lat: 32.821688, lng: -96.792936 };
  options: google.maps.MapOptions = {
    zoomControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    streetViewControl: false
  };
  markerPosition = {lat: 32.821688, lng: -96.792936}
  zoom = 15;

  constructor(
    public dialogRef: MatDialogRef<SearchDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.markerPosition.lat = data.marker.lat
    this.markerPosition.lng = data.marker.lng
    this.center.lat = data.marker.lat
    this.center.lng = data.marker.lng
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    console.log('saving')
  }

  onShare() {
    console.log('sharing')
  }
}
