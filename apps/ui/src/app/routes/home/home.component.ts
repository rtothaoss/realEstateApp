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
    const cityRegex = /([^, | ^\s]+)/;
    const stateRegex = /([A-Z]{2})/;
    const searchString = this.form.value.search;
    

    const cityResult = searchString.match(cityRegex)
    const stateResult = searchString.match(stateRegex)
    // changes the route without moving from the current view or
    // triggering a navigation event,
    this._router.navigate(['/search'], {
     relativeTo: this._route,
     queryParams: {
       city: cityResult,
       state_code: stateResult,
       limit: '20'
     },
     // preserve the existing query params in the route
     skipLocationChange: false
     // do not trigger navigation
   });
  }

  test() {
    const cityRegex = /([^, | ^\s]+)/;
    const stateRegex = /([A-Z]{2})/;
    const searchString = this.form.value.search;
    

    const cityResult = searchString.match(cityRegex)
    const stateResult = searchString.match(stateRegex)
    console.log(cityResult)
    console.log(stateResult)


  }

}
