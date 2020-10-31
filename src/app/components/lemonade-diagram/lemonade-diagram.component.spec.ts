import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonadeDiagramComponent } from './lemonade-diagram.component';

describe('LemonadeDiagramComponent', () => {
  let component: LemonadeDiagramComponent;
  let fixture: ComponentFixture<LemonadeDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LemonadeDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonadeDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
