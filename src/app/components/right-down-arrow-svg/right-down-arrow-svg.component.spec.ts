import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightDownArrowSvgComponent } from './right-down-arrow-svg.component';

describe('RightDownArrowSvgComponent', () => {
  let component: RightDownArrowSvgComponent;
  let fixture: ComponentFixture<RightDownArrowSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightDownArrowSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightDownArrowSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
