import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVehiculoFrmComponent } from './crear-vehiculo-frm.component';

describe('CrearVehiculoFrmComponent', () => {
  let component: CrearVehiculoFrmComponent;
  let fixture: ComponentFixture<CrearVehiculoFrmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearVehiculoFrmComponent]
    });
    fixture = TestBed.createComponent(CrearVehiculoFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
