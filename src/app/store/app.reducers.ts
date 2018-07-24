import {ActionReducerMap} from '@ngrx/store';
import {showsReducer, ShowsState} from '../shows/store/show.reducer';

export interface AppState {
  shows: ShowsState;
}

export const reducers: ActionReducerMap<AppState> = {
  shows: showsReducer
};


