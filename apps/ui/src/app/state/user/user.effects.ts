import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Error } from '@starter/api-interfaces';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from '../../shared/services/auth.service';
import * as UserActions from './user.actions';

const time = 3600;

@Injectable()
export class UserEffects {

  

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginRequest),
      mergeMap((data) =>
        this.authService.login(data.user).pipe(
          map((user) => {
            const expirationDate = new Date(new Date().getTime() + time * 1000);
            localStorage.setItem('expirationTime', JSON.stringify(expirationDate))

            this.authService.setLogoutTimer(time * 1000)
            return UserActions.loginSuccess({ user });
          }),
          catchError((err) => {
            const error: Error = err.error;
            return of(UserActions.loginError({ error }));
          })
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.registerRequest),
      mergeMap((data) =>
        this.authService.register(data.user).pipe(
          map((user) => {
            return UserActions.registerSuccess({ user });
          }),
          catchError((err) => {
            const error: Error = err.error;
            return of(UserActions.registerError({ error }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
