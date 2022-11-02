import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchService } from '../../../shared/services/search.service';

import { SavedHomesComponent } from './saved-homes.component';

describe('SavedHomesComponent', () => {
  let component: SavedHomesComponent;
  let fixture: ComponentFixture<SavedHomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavedHomesComponent],
      imports: [MatDialogModule, HttpClientModule],
      providers: [
        SearchService,
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
