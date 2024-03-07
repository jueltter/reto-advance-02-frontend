import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VehiculosService} from "../vehiculos.service";
import {Vehiculo} from "../vehiculo";

@Component({
  selector: 'app-crear-vehiculo-frm',
  templateUrl: './crear-vehiculo-frm.component.html',
  styleUrls: ['./crear-vehiculo-frm.component.css']
})
export class CrearVehiculoFrmComponent {

  @Output() added = new EventEmitter<Vehiculo>();

  vehiculoForm = new FormGroup({
    placa: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6), Validators.maxLength(7), Validators.pattern('[A-Z]{3}[0-9]{3,4}')]
    }),
    color: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    modelo: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    chasis: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('[A-Z0-9]{17}')]
    }),
    kilometraje: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('[0-9]{1,}')]
    }),
    anioModelo: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('[0-9]{4,4}')]
    }),
    marca: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    })

  });

  get placa() {
    return this.vehiculoForm.controls.placa
  }

  get color() {
    return this.vehiculoForm.controls.color
  }

  get modelo() {
    return this.vehiculoForm.controls.modelo
  }

  get chasis() {
    return this.vehiculoForm.controls.chasis
  }

  get kilometraje() {
    return this.vehiculoForm.controls.kilometraje
  }

  get anioModelo() {
    return this.vehiculoForm.controls.anioModelo
  }

  get marca() {
    return this.vehiculoForm.controls.marca
  }

  constructor(private vehiculosService: VehiculosService) {
  }

  createVehiculo() {
    let vehiculo = {
      placa: this.placa.value,
      color: this.color.value,
      modelo: this.modelo.value,
      chasis: this.chasis.value,
      kilometraje: Number(this.kilometraje.value),
      anioModelo: Number(this.anioModelo.value),
      marca: this.marca.value
    };

    //console.log(vehiculo);

    this.vehiculosService.create(vehiculo).subscribe( vehiculo => {
      this.vehiculoForm.reset();
      this.added.emit(vehiculo);
    })
  }

}
