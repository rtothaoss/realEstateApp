import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PropertyDetail } from '@starter/api-interfaces';
import { BehaviorSubject } from 'rxjs';
import { formatWithOptions } from 'util';
import { SearchService } from '../../../shared/services/search.service';
import { SearchDetailComponent } from '../../search/search-detail/search-detail.component';


@Component({
  selector: 'starter-saved-homes',
  templateUrl: './saved-homes.component.html',
  styleUrls: ['./saved-homes.component.scss'],
})
export class SavedHomesComponent implements OnInit {
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
  closedHeart = '../../../../assets/img/blueHeart.png'
  deleting = false;

  constructor(public dialog: MatDialog, private searchService: SearchService) {}

  ngOnInit(): void {
    this.savedHomesSub()
  }

  savedHomesSub() {
    this.searchService.savedHomes().subscribe((details) => {
      console.log('this fired off')
      this.location = details;
      console.log(details);
      this.loadingSubject.next(true);
    });
  }

  openDialog(propertyID: string) {
    console.log(this.deleting)
    console.log(!this.deleting)
   
    if(!this.deleting) {
      console.log(this.deleting)
      console.log(propertyID)
      this.searchService.propertyDetailApi(propertyID).subscribe((details) => {
        console.log(details)
        //put this in a seperate function to make things look cleaner
        this.propertyDetail = details.data.property_detail;
        const formattedAddress = `${this.propertyDetail.address.line}, ${this.propertyDetail.address.city}, ${this.propertyDetail.address.state_code} ${this.propertyDetail.address.postal_code}`;
        const dialogRef = this.dialog.open(SearchDetailComponent, {
          width: '1100px',
          height: '900px',
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
  
        dialogRef.afterClosed().subscribe((result) => {
          console.log(result)
          console.log('The dialog was closed');
        });
      });
    }
 
  }

  unSave(propertyId: string) {
    this.deleting = true;
    this.searchService.deleteHome(propertyId).subscribe((details) => {
      this.savedHomesSub()
      this.deleting = false;
    });
  }

}
