import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchService } from '../../shared/services/search.service';
import { SearchDetailComponent } from '../search/search-detail/search-detail.component';

@Component({
  selector: 'starter-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  content = 'savedHomes';

  constructor(public dialog: MatDialog, private searchService: SearchService) {}

  picker(title: string) {
    switch (title) {
      case 'savedHomes':
        this.content = title;
        return;
      case 'savedSearches':
        this.content = title;
        return;
      case 'yourHome':
        this.content = title;
        return;
      case 'accountSettings':
        this.content = title;
        return;
        default:
          this.content = 'savedHomes'
    }
  }

  accountSettings() {
    console.log('account settings');
  }

  yourHome() {
    this.searchService.userHome();
  }

  savedSearches() {
    this.searchService.savedSearches();
  }

  savedHomes() {
    this.searchService.savedHomes();
  }
}
