import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowsComponent} from './shows-list/shows.component';
import {RouterModule} from '@angular/router';
import {routes} from './shows.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowsTemplateComponent } from './shows-template/shows-template.component';
import { SingleShowComponent } from './single-show/single-show.component';
import {MockAuthienticationGuard} from './mock-authientication.guard';
import {ShowsService} from './shows.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [MockAuthienticationGuard, ShowsService],
  declarations: [ShowsComponent, ShowsTemplateComponent, SingleShowComponent]
})
export class ShowsModule { }
