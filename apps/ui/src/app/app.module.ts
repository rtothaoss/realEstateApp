/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionReducer, ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { localStorageSync } from 'ngrx-store-localstorage';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { userReducer, msgReducer, AppState, UserEffects, searchReducer, SearchEffects } from './state';
import { environment } from '../environments/environment';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';




const reducers: ActionReducerMap<AppState> = { user: userReducer, msg: msgReducer, search: searchReducer};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [
      {
        user: ['user'],
      },
    ],
    storageKeySerializer: (key: string) => `starter-${key}`,
    rehydrate: true,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects, SearchEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
