import {Show} from '../model/show.interface';
import {Action} from '@ngrx/store';
import {SHOWS_RECEIVED, ShowsReceived} from './shows.actions';

export interface ShowsState {
  shows: Show[];
}

const initialStatge: ShowsState = {
  shows: []
};

export function showsReducer(state: ShowsState = initialStatge, action: Action): ShowsState {
  switch (action.type) {
    case SHOWS_RECEIVED: {
      return {...state, shows: (action as ShowsReceived).shows}
    }
    default: {
      return state;
    }
  }

}
