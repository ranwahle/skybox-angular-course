import {Component, OnInit, ViewChild} from '@angular/core';
import {SomeComponentComponent} from "./my-module/some-component/some-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  vulnerabilities;

  ngOnInit() {
    setTimeout(() => {
      this.setVulnerablilities()
    }, 1000)
  }
  titleChanged(newTitle: string) {
    this.title = newTitle;
    setTimeout(() =>
      this.childComponent.componentTitle = 'My Event has been handled')

  }

  setVulnerablilities() {
    const vul1 = {id: 0, severity: 'High'}
    this.vulnerabilities = [vul1, vul1, {
      id: 1,
      severity: 'Critical'
    },
      {
        id: 2,
        severity: 'Critical'
      }, {
        id: 3,
        severity: 'Non Issue'
      }, {
        id: 4,
        severity: 'Moderate'
      }
    ];
  }
  @ViewChild('child')
  childComponent: SomeComponentComponent;
}
