import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class MockAuthienticationGuard implements CanDeactivate {
  canDeactivate(component: any, currentRoute:
    ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?:
                     RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

}
