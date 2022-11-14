import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectUser, logoutUser, showMsg } from '../../../../state';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from '../../../../routes/search/login-modal/login-modal.component';
import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'starter-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );
  @ViewChild(MatSidenavContainer) MatSidenavContainer!: MatSidenavContainer;
  triggerOrigin!: CdkOverlayOrigin;

  user$ = this.store.select(selectUser);

  open = false;

  constructor(private breakpointObserver: BreakpointObserver, private store: Store, private authService: AuthService, private router: Router, public dialog: MatDialog) {}

  toggle(trigger: CdkOverlayOrigin) {
    this.triggerOrigin = trigger;
    this.open = !this.open;
  }

  logout(): void {
    this.store.dispatch(logoutUser());
    this.authService.clearLogoutTimer();
    this.store.dispatch(showMsg({ msg: { message: 'You have been logged out!' } }));
    this.MatSidenavContainer.close();
    if(this.router.url !== '/') {
      this.router.navigate(['/'])
    }

    
    
  }

  showLogin() {
    const loginDialogRef = this.dialog.open(LoginModalComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        // href: ref.src,
      },
    });

    loginDialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

    this.MatSidenavContainer.close();
    
  }
}
