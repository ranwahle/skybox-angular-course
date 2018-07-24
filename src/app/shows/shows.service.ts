import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {ShowsReceived} from './store/shows.actions';

@Injectable()
export class ShowsService {

  private _shows: any[] = [];
  constructor(private http: HttpClient, private store: Store<any>) { }

  getShows(query: string): Observable<any[]> {
    const observable = this.http.get(`search/shows?q=${query}`).pipe(map(
      (data: any[]) => data.map(item => item.show)))

    observable.subscribe(shows => {
      this._shows = shows
      this.store.dispatch(new ShowsReceived(shows))
    })
    return observable;
  }

  getShowById(id: string) : Observable<any> {
    const foundShow = this._shows.find(show => show.id === +id)
    if (foundShow) {
      return of(foundShow)
    }
   return this.http.get(`shows/${id}`)
  }


}
