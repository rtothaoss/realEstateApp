import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from '../../../shared/services/search.service';
import { SearchDetailComponent } from '../../search/search-detail/search-detail.component';

@Component({
  selector: 'starter-saved-homes',
  templateUrl: './saved-homes.component.html',
  styleUrls: ['./saved-homes.component.scss'],
})
export class SavedHomesComponent implements OnInit{

  location! : Array<any>
  address = '2203 Allen St, Dallas, TX 75204';
  photo = 'https://ap.rdcpix.com/f05645e43168d43ebb134a6eaa210913l-m2327927031s-w1024_h768.jpg';
  price = 1850000;
  beds = '4';
  bath = '4';
  sqft = '3306';
  overview = 'Fabulous, One of a Kind Single Family Residence located in the State Thomas Neighborhood! Home has 4 Bedrooms, 3.1 Baths with a Large Private Courtyard with French Antique Bronze Sculpture, 2 Terraces with Views of Downtown, Private Elevator, & 3 Fireplaces. 1st Level Bedroom has a Separate Entry, Kitchen, Private Laundry Room, & attached Bath. Could be used as Separate Apt or Guest Quarters. Living Room has Fireplace & Terrace access. Kitchen with Stainless Steel Appliances, Butlers Pantry & Bar, & Separate'
  defaultHouse = '../../../assets/img/defaulthouse.jpeg';
  loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  
  constructor(public dialog: MatDialog, private searchService: SearchService){}

  ngOnInit(): void {
      this.searchService.savedHomes().subscribe((details) => {
        this.location = details;
        console.log(details)
        this.loadingSubject.next(true);
      })
  }

  

  openDialog(ref: any) {


    const dialogRef = this.dialog.open(SearchDetailComponent, {
      width: '1100px',
      height: '900px',
      data: {
        address: this.address,
        photo: this.photo,
        price: this.price,
        beds: this.beds,
        bath: this.bath,
        sqft: this.sqft,
        overview: this.overview
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

}
