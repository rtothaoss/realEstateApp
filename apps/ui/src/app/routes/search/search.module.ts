import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from './search.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, SharedModule, GoogleMapsModule, HttpClientJsonpModule],
  exports: [SearchComponent],
})
export class SearchModule {}
