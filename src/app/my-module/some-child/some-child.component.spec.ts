import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeChildComponent } from './some-child.component';

describe('SomeChildComponent', () => {
  let component: SomeChildComponent;
  let fixture: ComponentFixture<SomeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
