import { Error } from '@starter/api-interfaces';
import { UserState } from './user';
import { SearchState } from './search'

export interface AppState {
  user: UserState;
  msg: Partial<Error>;
  search: SearchState
}
