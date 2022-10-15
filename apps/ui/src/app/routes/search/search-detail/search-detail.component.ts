import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../../shared/services/auth.service';
import { SearchService } from '../../../shared/services/search.service';
import { ImageDetailComponent } from '../image-detail/image-detail.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';

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
  propertyID: string;
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
    private searchService: SearchService,
    private authService: AuthService
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
    
    if(this.authService.getToken()) {
      this.searchService.checkForSavedHome(this.data.propertyID).subscribe((details) => {
      
        if (details !== null) {
          this.saved = true;
          this.homeId = details.id;
         
        }
      });
    }
 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveOrDelete() {

    if(this.authService.getToken()) {
      if (this.saved) {
        console.log('deleting home');
        this.searchService.deleteHome(this.data.propertyID.toString()).subscribe((details) => {
          console.log(details);
          this.saved = false;
        });
      } else {
        console.log('saving home');
        const body = {
          price: this.data.price || 0,
          beds: this.data.beds || 0,
          bath: this.data.bath || 0,
          sqft: this.data.sqft || 0,
          type: this.data.type || 'Home',
          yearBuilt: this.data.yearBuilt || 0,
          address: this.data.address || '123 Address Ln',
          heating: 'Central, Zoned',
          cooling: 'Ceiling Fan(s), Central Ai...',
          parking: this.data.parking || '0', 
          lot: this.data.lot || 0,
          image: this.data.photo || '',
          propertyId: this.data.propertyID,
        };
        
        this.searchService.saveHouse(body).subscribe((details) => {
          console.log(details);
          this.saved = true;
        });
      }
    } else {
      this.showLogin();
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

  showLogin() {
    const loginDialogRef = this.dialog.open(LoginModalComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        // href: ref.src,
      },
    });

    loginDialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
