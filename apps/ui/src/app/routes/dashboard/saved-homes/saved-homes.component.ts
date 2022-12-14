import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PropertyDetail } from '@starter/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchService } from '../../../shared/services/search.service';
import { SearchDetailComponent } from '../../search/search-detail/search-detail.component';

@Component({
  selector: 'starter-saved-homes',
  templateUrl: './saved-homes.component.html',
  styleUrls: ['./saved-homes.component.scss'],
})
export class SavedHomesComponent implements OnInit {
  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);
  isTablet: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Small);
  location!: Array<any>;
  address = '2203 Allen St, Dallas, TX 75204';
  photo = 'https://ap.rdcpix.com/f05645e43168d43ebb134a6eaa210913l-m2327927031s-w1024_h768.jpg';
  price = 1850000;
  beds = '4';
  bath = '4';
  sqft = '3306';
  overview =
    'Fabulous, One of a Kind Single Family Residence located in the State Thomas Neighborhood! Home has 4 Bedrooms, 3.1 Baths with a Large Private Courtyard with French Antique Bronze Sculpture, 2 Terraces with Views of Downtown, Private Elevator, & 3 Fireplaces. 1st Level Bedroom has a Separate Entry, Kitchen, Private Laundry Room, & attached Bath. Could be used as Separate Apt or Guest Quarters. Living Room has Fireplace & Terrace access. Kitchen with Stainless Steel Appliances, Butlers Pantry & Bar, & Separate';
  defaultHouse = '../../../assets/img/defaulthouse.jpeg';
  loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  propertyDetail!: PropertyDetail;
  closedHeart = '../../../../assets/img/blueHeart.png';
  deleting = false;
  isDisabled = false;

  constructor(
    public dialog: MatDialog,
    private searchService: SearchService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.savedHomesSub();
  }

  savedHomesSub() {
    this.searchService.savedHomes().subscribe((details) => {
      this.location = details;

      this.loadingSubject.next(true);
    });
  }

  openDialog(propertyID: string) {
    this.isDisabled = true;
    if (!this.deleting) {
      this.searchService.propertyDetailApi(propertyID).subscribe((details) => {
        if(details.data === null) {
          this.isDisabled = false;
          return;
        }
        //put this in a seperate function to make things look cleaner
        this.propertyDetail = details.data.property_detail;
        const formattedAddress = `${this.propertyDetail.address.line}, ${this.propertyDetail.address.city}, ${this.propertyDetail.address.state_code} ${this.propertyDetail.address.postal_code}`;
        const dialogRef = this.dialog.open(SearchDetailComponent, {
          maxHeight: '100vh',
          maxWidth: '100vw',
          width: '60%',
          height: '100%',
          panelClass: 'custom-dialog-container',
          data: {
            address: formattedAddress,
            photo: this.propertyDetail.photos[0].href,
            price: this.propertyDetail.prop_common.price,
            beds: this.propertyDetail.prop_common.bed,
            bath: this.propertyDetail.prop_common.baths_full,
            sqft: this.propertyDetail.prop_common.sqft,
            marker: {
              lat: this.propertyDetail.address.location.lat,
              lng: this.propertyDetail.address.location.lon,
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
            lot: this.propertyDetail.prop_common.lot_sqft,
          },
        });
        const tableDialogSubscription = this.isTablet.subscribe((size) => {
          if (size.matches) {
            dialogRef.updateSize('80vw', '100vh');
          } else {
            console.log('tablet');
            
          }
        });
        dialogRef.afterClosed().subscribe(() => {
          tableDialogSubscription.unsubscribe();
        });
        const smallDialogSubscription = this.isExtraSmall.subscribe((size) => {
          if (size.matches) {
            dialogRef.updateSize('100vw', '100vh');
          } else {
            console.log('mobile');
            
          }
        });
        dialogRef.afterClosed().subscribe(() => {
          smallDialogSubscription.unsubscribe();
        });

        this.isDisabled = false;
      });
    }
  }

  unSave(propertyId: string) {
    this.deleting = true;
    this.searchService.deleteHome(propertyId).subscribe((details) => {
      this.savedHomesSub();
      this.deleting = false;
    });
  }
}
