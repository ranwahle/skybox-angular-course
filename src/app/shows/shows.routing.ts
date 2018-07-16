import {Route} from '@angular/router';
import {ShowsComponent} from './shows-list/shows.component';
import {ShowsTemplateComponent} from './shows-template/shows-template.component';

export const routes: Route[] = [
  {path: '', component: ShowsComponent}
]
