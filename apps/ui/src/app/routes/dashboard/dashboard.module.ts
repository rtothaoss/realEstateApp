import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SavedHomesComponent } from './saved-homes/saved-homes.component';
import { SavedSearchesComponent } from './saved-searches/saved-searches.component';
import { YourHomeComponent } from './your-home/your-home.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SavedHomesComponent,
    SavedSearchesComponent,
    YourHomeComponent,
    AccountSettingsComponent,

  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, MatDialogModule],
})
export class DashboardModule {}
