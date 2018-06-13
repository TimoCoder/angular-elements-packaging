import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicoFunctionComponent } from './fico-function.component';

describe('FicoFunctionComponent', () => {
  let component: FicoFunctionComponent;
  let fixture: ComponentFixture<FicoFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicoFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicoFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
