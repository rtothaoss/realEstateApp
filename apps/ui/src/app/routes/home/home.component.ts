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
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('searchBar')
  public searchElementRef!: ElementRef;
  homeData = {};
  form!: FormGroup;
  place!: google.maps.places.PlaceResult;

  constructor(
    private http: HttpClient,
    private _route: ActivatedRoute,
    private _router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: new FormControl('', {}),
    });
  }

  ngAfterViewInit(): void {
    this.getPlaceAutocomplete();
  }

  getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    autocomplete.setComponentRestrictions({ country: ['us'] });
    autocomplete.setTypes(['(regions)']);

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      this.place = autocomplete.getPlace();
    });
  }

  search() {
    const city = this.place.address_components?.at(0)?.long_name;
    const state = this.place.address_components?.at(2)?.short_name;

    this._router.navigate(['/search'], {
      relativeTo: this._route,
      queryParams: {
        city: city,
        state_code: state,
        limit: '20',
      },
      skipLocationChange: false,
    });
  }
}
