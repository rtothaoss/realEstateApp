import { ErrorUI } from '@starter/api-interfaces';
import { UserState } from './user';
import { SearchState } from './search'

export interface AppState {
  user: UserState;
  msg: Partial<ErrorUI>;
  search: SearchState
}
