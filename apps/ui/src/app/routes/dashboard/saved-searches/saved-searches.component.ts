import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'starter-saved-searches',
  templateUrl: './saved-searches.component.html',
  styleUrls: ['./saved-searches.component.scss'],
})
export class SavedSearchesComponent implements OnInit {
  locations!: Record<string, unknown>[]
  savedHomesSub = Subscription;
  loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.savedHomes().subscribe((details) => {
      this.locations = details
      console.log(this.locations)
      this.loadingSubject.next(true);
    })
}

  onEdit(id: number) {
    console.log('edit this search');
  }

  onDelete(id: number) {
    console.log('delete this search');
  }
}
