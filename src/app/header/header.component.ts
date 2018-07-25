import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  actAsLogin: boolean;
  @Output() actiAsLoggedInChange = new EventEmitter<boolean>()
  ngOnInit() {
  }

  actAsloginChanged(evt) {
    this.actiAsLoggedInChange.emit(evt.checked);
  }

}
