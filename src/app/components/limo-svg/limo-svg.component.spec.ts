import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimoSvgComponent } from './limo-svg.component';

describe('LimoSvgComponent', () => {
  let component: LimoSvgComponent;
  let fixture: ComponentFixture<LimoSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimoSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimoSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
