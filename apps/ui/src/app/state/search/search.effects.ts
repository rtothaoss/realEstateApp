import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ErrorUI } from '@starter/api-interfaces';
import * as SearchActions from './search.actions';
import { SearchService } from '../../shared/services/search.service';

@Injectable()
export class SearchEffects {

    searchRequest$ = createEffect(() => 
        this.actions$.pipe(
            ofType(SearchActions.searchRequest),
            mergeMap(() => 
            this.searchService.realEstateApi().pipe(
                map((homeData: any) => {
                    return SearchActions.setHomeData(homeData)
                }),
                catchError((err) => {
                    const error: ErrorUI = err.error;
                    return of(SearchActions.searchRequestError({error}))
                })
            )
            )
        )
    )

    constructor(private actions$: Actions, private searchService: SearchService) {}

}