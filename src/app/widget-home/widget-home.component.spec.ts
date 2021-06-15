import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHomeComponent } from './widget-home.component';

describe('WidgetHomeComponent', () => {
  let component: WidgetHomeComponent;
  let fixture: ComponentFixture<WidgetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
