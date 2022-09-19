import { HttpStatus } from '@nestjs/common';
import { createReducer, on } from '@ngrx/store';
import { Error, } from '@starter/api-interfaces';
import { searchRequest, searchRequestError, setHomeData } from './search.actions'

export interface SearchState {
    homeData:  any,
    msg: Partial<Error>;
}

const initialState: SearchState = {
    homeData: {
        status: 0,
        data: {}
    },
    msg: {},
}

export const searchReducer = createReducer(
    initialState,
    on(setHomeData, (state, payload) => {
        console.log(payload)
        return { ...state, homeData: payload }
    }),
    on(searchRequestError, (state, payload) => {
        return {...state, msg: payload.error}
    })
)