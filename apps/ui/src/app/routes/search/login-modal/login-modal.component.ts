import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectUser } from '../../../state'
import { SearchDetailComponent } from '../search-detail/search-detail.component';

@Component({
  selector: 'starter-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnDestroy {

  private storeSub: Subscription;

  open = false

  constructor(public dialogRef: MatDialogRef<SearchDetailComponent>, private store: Store) {

    this.storeSub = this.store.select(selectUser).subscribe(user => {
      if(Object.keys(user).length > 0) {
        dialogRef.close();
      }
    })

  }

  ngOnDestroy(): void {
      this.storeSub.unsubscribe();
  }



 
}
