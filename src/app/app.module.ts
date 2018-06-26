import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyFirstComponentComponent} from './my-first-component/my-first-component.component';
import {MyModuleModule} from "./my-module/my-module.module";
import { MyNgClassDirective } from './my-module/my-ng-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent

  ],
  imports: [
    BrowserModule,
    MyModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
