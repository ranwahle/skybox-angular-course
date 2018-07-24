import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsTemplateComponent } from './shows-template.component';

describe('ShowsTemplateComponent', () => {
  let component: ShowsTemplateComponent;
  let fixture: ComponentFixture<ShowsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
