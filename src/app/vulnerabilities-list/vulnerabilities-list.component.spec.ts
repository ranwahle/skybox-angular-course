import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerabilitiesListComponent } from './vulnerabilities-list.component';

describe('VulnerabilitiesListComponent', () => {
  let component: VulnerabilitiesListComponent;
  let fixture: ComponentFixture<VulnerabilitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VulnerabilitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnerabilitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
