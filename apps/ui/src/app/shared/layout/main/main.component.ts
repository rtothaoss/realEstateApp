import { Component, ChangeDetectionStrategy, OnInit, AfterViewChecked, AfterContentInit, OnChanges, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs';
import { selectMsg } from '../../../state';

@Component({
  selector: 'starter-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {

  showFooter = true;
  height = 'h-[calc(100vh_-_8rem)]'
  background = 'bg-gray-100'

  error$ = this.store.select(selectMsg).pipe(
    filter((err) => !!err.message),
    tap((err) => {
      this.snackBar.open(
        `${err.error ?? 'Success'} - ${Array.isArray(err.message) ? err.message.join(', ') : err.message}`,
        undefined,
        {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: err.error ? 'notif-error' : 'notif-success',
          duration: 3000,
        }
      );
    })
  );


  constructor(private store: Store, private snackBar: MatSnackBar, private router: Router) {
    router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        // if(event.url.split('?')[0] === '/search') {
        //   this.showFooter = false;
        //   this.height = 'h-[calc(100vh_-_5rem)]'
        //   this.background = 'bg-white'

        // } else {
        //   this.showFooter = true;
        //   this.height = 'h-[calc(100vh_-_8rem)]'
        //   this.background = 'bg-gray-100'
        // }
        console.log(event.url.split('?')[0])
        if(event.url.split('?')[0] === '/') {
          
          this.showFooter = true;
        } else {
             this.showFooter = false;
          this.height = 'h-[calc(100vh_-_5rem)]'
          this.background = 'bg-white'
        }
      }
    })
  }

  ngOnInit(): void {
    this.error$.subscribe();

  
  }



}
