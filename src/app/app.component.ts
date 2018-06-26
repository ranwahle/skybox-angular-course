import {Component, ViewChild} from '@angular/core';
import {SomeComponentComponent} from "./my-module/some-component/some-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  titleChanged(newTitle: string) {
    this.title = newTitle;
    setTimeout(() => this.childComponent.componentTitle = 'My Event has been handled')

  }
  @ViewChild('child')
  childComponent: SomeComponentComponent;
}
