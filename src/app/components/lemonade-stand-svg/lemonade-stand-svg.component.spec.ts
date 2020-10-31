import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonadeStandSvgComponent } from './lemonade-stand-svg.component';

describe('LemonadeStandSvgComponent', () => {
  let component: LemonadeStandSvgComponent;
  let fixture: ComponentFixture<LemonadeStandSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LemonadeStandSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonadeStandSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
