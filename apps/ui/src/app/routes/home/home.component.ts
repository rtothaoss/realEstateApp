import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'starter-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent implements OnInit, AfterViewInit{

  @ViewChild('searchBar')
  public searchElementRef!: ElementRef;
  homeData = {}
  form!: FormGroup;


  constructor(private http: HttpClient, private _route: ActivatedRoute, private _router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: new FormControl('', {})
    })
    console.log('init')
  }

  ngAfterViewInit(): void {
    // const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    // autocomplete.setComponentRestrictions({country: ['us']})
    // autocomplete.setTypes(['administrative_area_level_2'])
    console.log('afterViewInit')
  }


  search(){
    const searchElements = this.form.value.search.split(',')
    
    this._router.navigate(['/search'], {
     relativeTo: this._route,
     queryParams: {
       city: searchElements[0],
       state_code: searchElements[1],
       limit: '20'
     },
     skipLocationChange: false

   });
  }

}
