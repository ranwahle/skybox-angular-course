import {Route} from '@angular/router';
import {ShowsComponent} from './shows-list/shows.component';
import {SingleShowComponent} from './single-show/single-show.component';
import {MockAuthienticationGuard} from './mock-authientication.guard';

export const routes: Route[] = [
  {path: '', component: ShowsComponent
  , children: [
      {path: 'singleShow/:id', component: SingleShowComponent,
      canDeactivate: [MockAuthienticationGuard]}
    ]},
];
