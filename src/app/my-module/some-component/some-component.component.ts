import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class SomeComponentComponent implements OnInit {

  @Input() componentTitle: string;
  @Output() titlechange = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.componentTitle = 'Some  title', 3000);
  }


  changeTitle(clickEvent) {
    console.log('click event', clickEvent)
    this.titlechange.emit(`Button clicked on ${new Date()}`)
  }

}
