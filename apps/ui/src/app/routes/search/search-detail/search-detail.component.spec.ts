import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AuthService } from '../../../shared/services/auth.service';
import { SearchService } from '../../../shared/services/search.service';

import { SearchDetailComponent } from './search-detail.component';


jest.mock('../../../shared/services/auth.service');

const initialState = {
  user: {},
};

describe('SearchDetailComponent', () => {
  let component: SearchDetailComponent;
  let store: MockStore;
  let fixture: ComponentFixture<SearchDetailComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchDetailComponent],
      imports: [ MatDialogModule, HttpClientModule ],
      providers: [
        SearchService,
        AuthService,
        {provide: MAT_DIALOG_DATA, useValue: [ ]},
        {provide: MatDialogRef, useValue: { }},
        provideMockStore({
          initialState: initialState,
        }),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchDetailComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
