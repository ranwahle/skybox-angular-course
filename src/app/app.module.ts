import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyFirstComponentComponent} from './my-first-component/my-first-component.component';
import {MyModuleModule} from './my-module/my-module.module';
import {VulnerabilitiesListComponent} from './vulnerabilities-list/vulnerabilities-list.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BaseUrlInterceptorService} from './base-url-interceptor.service';
import {ToLowerPipe} from './to-lower.pipe';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing';
import { HeaderComponent } from './header/header.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/app.reducers';
import {environment} from '../environments/environment';
import {StoreDevtools, StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MatSlideToggleModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    VulnerabilitiesListComponent,
    ToLowerPipe,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyModuleModule,
    MatSlideToggleModule,
    StoreModule.forRoot(reducers),
    environment.production ?  [] :  StoreDevtoolsModule.instrument({
      maxAge: 60,

    }),
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
