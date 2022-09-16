import { HttpStatus } from '@nestjs/common';
import { createReducer, on } from '@ngrx/store';
import { ErrorUI, HomeDataInterface } from '@starter/api-interfaces';
import { searchRequest, searchRequestError, setHomeData } from './search.actions'

export interface SearchState {
    homeData:  any,
    msg: Partial<ErrorUI>;
}

const initialState: SearchState = {
    homeData: {},
    msg: {},
}

export const searchReducer = createReducer(
    initialState,
    on(setHomeData, (state, payload) => {
        console.log(payload)
        return { ...state, homeData:payload}
    }),
    on(searchRequestError, (state, payload) => {
        return {...state, msg: payload.error}
    })
)