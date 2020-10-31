import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonComponent } from './lemon.component';

describe('LemonComponent', () => {
  let component: LemonComponent;
  let fixture: ComponentFixture<LemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
