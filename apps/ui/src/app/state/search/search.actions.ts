import { HttpStatus } from '@nestjs/common';
import { createAction, props } from '@ngrx/store';
import { Error, } from '@starter/api-interfaces';

const search = '[Search]';

export const searchRequest = createAction(`${search} Request`);
export const setHomeData = createAction(`${search} Set Home Data`, props<{ homeData: any }>())
export const searchRequestError = createAction(`${search} Request Error`, props<{ error: Error }>());