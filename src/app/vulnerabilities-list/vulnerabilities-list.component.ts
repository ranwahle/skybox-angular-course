import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-vulnerabilities-list',
  templateUrl: './vulnerabilities-list.component.html',
  styleUrls: ['./vulnerabilities-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class VulnerabilitiesListComponent implements OnInit, OnChanges {

  private _vulnerabilities: any[];
  currentTime: Date;
  get vulnerabilities() {
    return this._vulnerabilities;
  }
  @Input() set vulnerabilities(value: any[]) {
    console.log('set vols');
    this.currentTime = new Date();
    if (_.isEqual(value, this._vulnerabilities)) {
      return;
    }
    this._vulnerabilities = value;
  }

  constructor(private cdRef: ChangeDetectorRef) {
    setInterval(() => this.currentTime = new Date(), 1000)
    setInterval(() => this.cdRef.detectChanges(), 2000)
  }

  ngOnChanges(changes) {
    console.log('change detection runs', changes);
  }

  now() {
    return new Date();
  }

  trackById(index: number, vul: any) {
    return vul.id;
  }



  ngOnInit() {


  }

}
