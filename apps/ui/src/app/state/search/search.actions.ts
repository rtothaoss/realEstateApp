import { HttpStatus } from '@nestjs/common';
import { createAction, props } from '@ngrx/store';

const search = '[Search]';

export const searchRequest = createAction(`${search} Request`, props<{city: string, state: string}>());
export const setHomeData = createAction(`${search} Set Home Data`, props<{ homeData: any }>())
export const searchRequestError = createAction(`${search} Request Error`, props<{ error: Error }>());