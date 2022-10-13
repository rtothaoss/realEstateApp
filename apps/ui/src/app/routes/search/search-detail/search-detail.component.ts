import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchService } from '../../../shared/services/search.service';
import { ImageDetailComponent } from '../image-detail/image-detail.component';

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
  };
  photos: Array<Record<string, unknown>>;
  propertyHistory: Array<{
    datasource_name: string;
    date: string;
    event_name: string;
    price: number;
    price_changed: number;
    price_range_max: number;
    price_range_min: number;
    source: string;
    sqft: number;
  }>;
  mortgageInfo: {
    down_payment: number;
    hoa_fees: number;
    loan_amount: number;
    monthly_home_insurance: number;
    monthly_mortgage_insurance: number;
    monthly_payment: number;
    monthly_property_taxes: number;
    principal_and_interest: number;
    rate: number;
    term: number;
    total_payment: number;
  };
  schools: Array<{
    distance_in_miles: number;
    education_levels: Array<string>;
    funding_type: string;
    grades: { range: { high: string; low: string } };
    greatschools_id: string;
    id: string;
    lat: number;
    location: {
      city: string;
      city_slug_id: string;
      county: string;
      postal_code: string;
      state: string;
      street: string;
    };
    lon: number;
    name: string;
    nces_id: string;
    phone: string;
    ratings: { great_schools_rating: number; parent_rating: null };
    relevance: string;
    student_count: number;
    student_teacher_ration: number;
  }>;
  propertyID: number;
  type: string;
  yearBuilt: number;
  parking: number;
  lot: number;
}

@Component({
  selector: 'starter-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss'],
})
export class SearchDetailComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 32.821688, lng: -96.792936 };
  options: google.maps.MapOptions = {
    zoomControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    streetViewControl: false,
  };
  markerPosition = { lat: 32.821688, lng: -96.792936 };
  zoom = 15;
  totalMonthlyPayment = 0;
  defaultHouse = '../../../../assets/img/defaulthouse.jpeg';
  saved = false;
  homeId = 0;

  constructor(
    public dialogRef: MatDialogRef<SearchDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialog: MatDialog,
    private searchService: SearchService
  ) {
    this.markerPosition.lat = data.marker.lat;
    this.markerPosition.lng = data.marker.lng;
    this.center.lat = data.marker.lat;
    this.center.lng = data.marker.lng;
    this.totalMonthlyPayment =
      data.mortgageInfo.principal_and_interest +
      data.mortgageInfo.monthly_mortgage_insurance +
      data.mortgageInfo.monthly_property_taxes +
      data.mortgageInfo.monthly_home_insurance +
      data.mortgageInfo.hoa_fees;
  }

  ngOnInit(): void {
    this.searchService.checkForSavedHome(this.data.propertyID).subscribe((details) => {
      console.log(this.data.propertyID);
      console.log(details);
      if (details !== null) {
        this.saved = true;
        this.homeId = details.id;
        console.log(this.homeId);
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveOrDelete() {
    console.log(this.saved);
    if (this.saved) {
      console.log('deleting home');
      this.searchService.deleteHome(this.homeId).subscribe((details) => {
        console.log(details);
        this.saved = false;
      });
    } else {
      console.log('saving home');
      const body = {
        price: this.data.price,
        beds: this.data.beds,
        bath: this.data.bath,
        sqft: this.data.sqft,
        type: this.data.type,
        yearBuilt: this.data.yearBuilt,
        address: this.data.address,
        heating: 'Central, Zoned',
        cooling: 'Ceiling Fan(s), Central Ai...',
        parking: this.data.parking,
        lot: this.data.lot,
        image: this.data.photo,
        propertyId: this.data.propertyID,
      };

      this.searchService.saveHouse(body).subscribe((details) => {
        console.log(details);
        this.saved = true;
      });
    }
  }

  onShare() {
    console.log('sharing');
  }

  showImage(ref: any) {
    console.log(ref);
    const imageDialogRef = this.dialog.open(ImageDetailComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        href: ref.src,
      },
    });

    imageDialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
