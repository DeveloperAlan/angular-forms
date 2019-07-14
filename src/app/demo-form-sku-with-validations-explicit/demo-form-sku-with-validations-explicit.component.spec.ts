import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuWithValidationsExplicitComponent } from './demo-form-sku-with-validations-explicit.component';

describe('DemoFormSkuWithValidationsExplicitComponent', () => {
  let component: DemoFormSkuWithValidationsExplicitComponent;
  let fixture: ComponentFixture<DemoFormSkuWithValidationsExplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuWithValidationsExplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuWithValidationsExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
