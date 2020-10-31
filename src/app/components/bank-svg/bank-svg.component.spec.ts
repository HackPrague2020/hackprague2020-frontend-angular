import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSvgComponent } from './bank-svg.component';

describe('BankSvgComponent', () => {
  let component: BankSvgComponent;
  let fixture: ComponentFixture<BankSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
