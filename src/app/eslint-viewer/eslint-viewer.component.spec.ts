import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EslintViewerComponent } from './eslint-viewer.component';

describe('EslintViewerComponent', () => {
  let component: EslintViewerComponent;
  let fixture: ComponentFixture<EslintViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EslintViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EslintViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
