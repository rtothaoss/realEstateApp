import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchService } from '../../../shared/services/search.service';

import { YourHomeComponent } from './your-home.component';

describe('YourHomeComponent', () => {
  let component: YourHomeComponent;
  let fixture: ComponentFixture<YourHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourHomeComponent],
      imports: [MatDialogModule, HttpClientTestingModule],
      providers: [
        SearchService,
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(YourHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
