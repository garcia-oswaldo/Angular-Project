import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippinglisteditComponent } from './shippinglistedit.component';

describe('ShippinglisteditComponent', () => {
  let component: ShippinglisteditComponent;
  let fixture: ComponentFixture<ShippinglisteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippinglisteditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippinglisteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
