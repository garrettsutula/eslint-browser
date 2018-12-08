import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesBrowserComponent } from './rules-browser.component';

describe('BrowserComponent', () => {
  let component: RulesBrowserComponent;
  let fixture: ComponentFixture<RulesBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
