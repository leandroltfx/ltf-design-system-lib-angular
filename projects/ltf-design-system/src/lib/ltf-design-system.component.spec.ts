import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtfDesignSystemComponent } from './ltf-design-system.component';

describe('LtfDesignSystemComponent', () => {
  let component: LtfDesignSystemComponent;
  let fixture: ComponentFixture<LtfDesignSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LtfDesignSystemComponent]
    });
    fixture = TestBed.createComponent(LtfDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
