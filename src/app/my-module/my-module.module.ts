import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponentComponent } from './some-component/some-component.component';
import { SomeChildComponent } from './some-child/some-child.component';
import {MyNgClassDirective} from "./my-ng-class.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SomeComponentComponent, SomeChildComponent
  , MyNgClassDirective],
  exports: [SomeComponentComponent]
})
export class MyModuleModule { }
