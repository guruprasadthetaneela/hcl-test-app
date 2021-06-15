import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSummaryComponent } from './widget-summary.component';

describe('WidgetSummaryComponent', () => {
  let component: WidgetSummaryComponent;
  let fixture: ComponentFixture<WidgetSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
