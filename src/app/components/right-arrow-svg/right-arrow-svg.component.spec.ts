import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightArrowSvgComponent } from './right-arrow-svg.component';

describe('RightArrowSvgComponent', () => {
  let component: RightArrowSvgComponent;
  let fixture: ComponentFixture<RightArrowSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightArrowSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightArrowSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
