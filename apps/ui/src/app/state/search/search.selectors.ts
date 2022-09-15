import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from './search.reducer';

export const selectSearchState = createFeatureSelector<SearchState>('search');
export const selectHomeData = createSelector(selectSearchState, (state) => {
  return state.homeData;
});