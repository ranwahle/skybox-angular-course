import {Action} from '@ngrx/store';
export const LOGIN_CHANGED = 'Login Changed'
export class LoginChanged implements Action {
  readonly type = LOGIN_CHANGED;
  constructor(public loggedIn: boolean){}
}
