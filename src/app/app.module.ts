import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyFirstComponentComponent} from './my-first-component/my-first-component.component';
import {MyModuleModule} from "./my-module/my-module.module";
import { MyNgClassDirective } from './my-module/my-ng-class.directive';
import { VulnerabilitiesListComponent } from './vulnerabilities-list/vulnerabilities-list.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BaseUrlInterceptorService} from "./base-url-interceptor.service";
import { ShowsComponent } from './shows/shows.component';
import { ToLowerPipe } from './to-lower.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    VulnerabilitiesListComponent,
    ShowsComponent,
    ToLowerPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyModuleModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
