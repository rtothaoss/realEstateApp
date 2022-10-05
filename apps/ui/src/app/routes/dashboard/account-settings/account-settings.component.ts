import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'starter-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent {
  

  profile() {
    console.log('clicked profile')
  }

  notifications() {
    console.log('clicked notifications')
  }

  documentPreferences() {
    console.log('clicked document preferences')
  }
 
}
