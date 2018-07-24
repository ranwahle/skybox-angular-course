import {Action} from '@ngrx/store';
import {Show} from '../model/show.interface';

export const SHOWS_RECEIVED = `Shows received`

export class ShowsReceived implements Action {
  readonly type = SHOWS_RECEIVED;
  constructor(public shows: Show[]) {

  }
}
