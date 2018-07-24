import {Route} from '@angular/router';
import {VulnerabilitiesListComponent} from './vulnerabilities-list/vulnerabilities-list.component';

export const routes: Route[] = [{
  path: 'shows',
  loadChildren: './shows/shows.module#ShowsModule'
}, {
  path: 'vulnerabilities',
  component: VulnerabilitiesListComponent
}]
