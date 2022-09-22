import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from './search.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [SearchComponent, SearchDetailComponent],
  imports: [CommonModule, SearchRoutingModule, SharedModule, GoogleMapsModule, HttpClientJsonpModule, HttpClientModule, MatDialogModule],
  exports: [SearchComponent],
})
export class SearchModule {}
