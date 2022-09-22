import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Error } from '@starter/api-interfaces';
import * as SearchActions from './search.actions';
import { SearchService } from '../../shared/services/search.service';

@Injectable()
export class SearchEffects {
  searchRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchRequest),
      mergeMap((data) =>
        this.searchService.realEstateApi(data.city, data.state).pipe(
          // this.searchService.testApi().pipe(
          // this.searchService.getHoundList().pipe(
          map((homeData: any) => {
            return SearchActions.setHomeData(homeData);
          })
          // catchError((err) => {
          //     const error: Error = err.error;
          //     return of(SearchActions.searchRequestError({error}))
          // })
        )
      )
    )
  );

  constructor(private actions$: Actions, private searchService: SearchService) {}
}
