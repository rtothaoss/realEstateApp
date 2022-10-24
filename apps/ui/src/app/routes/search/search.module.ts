import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from './search.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [SearchComponent, SearchDetailComponent, ImageDetailComponent, LoginModalComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    MatDialogModule,
    MatPaginatorModule,
    LayoutModule
  ],
  exports: [SearchComponent],
})
export class SearchModule {}
