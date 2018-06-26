import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MyFirstComponentComponent
  implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
