import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-vulnerabilities-list',
  templateUrl: './vulnerabilities-list.component.html',
  styleUrls: ['./vulnerabilities-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class VulnerabilitiesListComponent implements OnInit, OnChanges, OnDestroy {

  currentTime: Date;

  constructor(private cdRef: ChangeDetectorRef) {

  }

  private _vulnerabilities: any[];

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

  ngOnDestroy() {
    console.log(' I have been destroyed');
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


  ngOnInit() {
    this.setVulnerablilities()
  }

}
