import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowsComponent} from './shows-list/shows.component';
import {RouterModule} from '@angular/router';
import {routes} from './shows.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowsTemplateComponent } from './shows-template/shows-template.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowsComponent, ShowsTemplateComponent]
})
export class ShowsModule { }
