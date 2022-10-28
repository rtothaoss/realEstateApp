import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PropertyDetail } from '@starter/api-interfaces';
import { Observable } from 'rxjs';
import { SearchService } from '../../../shared/services/search.service';
import { SearchDetailComponent } from '../../search/search-detail/search-detail.component';

@Component({
  selector: 'starter-your-home',
  templateUrl: './your-home.component.html',
  styleUrls: ['./your-home.component.scss'],
})
export class YourHomeComponent {

  isExtraSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);
  isTablet: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Small);
  street = '403 Ridgewood Rd';
  cityStateZip = 'Austin, TX 78746';
  estimate = 4250000;
  beds = 6;
  baths = 4;
  sqft = 4171;
  propertyID = '7146814887';
  isDisabled = false;
  propertyDetail!: PropertyDetail;

  constructor(public dialog: MatDialog, private searchService: SearchService, private breakpointObserver: BreakpointObserver) {}



  openDialog() {
    this.isDisabled = true;
   
      this.searchService.propertyDetailApi(this.propertyID).subscribe((details) => {
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
            propertyID: this.propertyID,
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
            console.log('nothing happens');
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
            console.log('nothing happens');
          }
        });
        dialogRef.afterClosed().subscribe(() => {
          smallDialogSubscription.unsubscribe();
        });

        this.isDisabled = false;
      });
    
  }
}
