import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestriccionVehiculoFrmComponent } from './restriccion-vehiculo-frm.component';

describe('RestriccionVehiculoFrmComponent', () => {
  let component: RestriccionVehiculoFrmComponent;
  let fixture: ComponentFixture<RestriccionVehiculoFrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestriccionVehiculoFrmComponent]
    });
    fixture = TestBed.createComponent(RestriccionVehiculoFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
