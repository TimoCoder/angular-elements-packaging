import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicoRulesetComponent } from './fico-ruleset.component';

describe('FicoRulesetComponent', () => {
  let component: FicoRulesetComponent;
  let fixture: ComponentFixture<FicoRulesetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicoRulesetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicoRulesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
