import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-some-child',
  templateUrl: './some-child.component.html',
  styleUrls: ['./some-child.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class SomeChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
