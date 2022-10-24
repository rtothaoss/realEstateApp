import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { AuthService } from '../../../shared/services/auth.service';
import { SearchService } from '../../../shared/services/search.service';
import { ImageDetailComponent } from '../image-detail/image-detail.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { DialogData } from '../../../../../../../libs/api-interfaces/src/lib/ui-interfaces';

@Component({
  selector: 'starter-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['../../../../../../../node_modules/keen-slider/keen-slider.css', './search-detail.component.scss'],
})
export class SearchDetailComponent implements OnInit, AfterViewInit, OnDestroy {

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


  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  currentSlide = 0
 
  slider!: KeenSliderInstance

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

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel
        },
      })

    })
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

  closeDialog() {
    this.dialog.closeAll();
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
  
}
