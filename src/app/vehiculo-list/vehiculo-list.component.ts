import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource} from "@angular/material/table";
import { Vehiculo} from "../vehiculo";
import { VehiculosService } from "../vehiculos.service";
import { MatDialog} from "@angular/material/dialog";
import { RestriccionVehiculoFrmComponent} from "../restriccion-vehiculo-frm/restriccion-vehiculo-frm.component";
import { RestriccionesService} from "../restricciones.service";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import { FormControl } from "@angular/forms";
import {DateUtils} from "../date-utils";
import { HorariosService } from '../horarios.service';
import {switchMap} from "rxjs";
import {Restriccion} from "../restriccion";

interface Hora {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent  implements OnInit {

  vehiculos = new MatTableDataSource<Vehiculo>([]);
  columnNames = ['placa','color', 'modelo', 'chasis', 'acciones'];
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  fechaAsFormControl : FormControl = new FormControl<Date>(new Date());
  fechaSeleccionada : Date | null = this.fechaAsFormControl.value;
  placa : string = '';

  horas : Hora[] = [
    {value: '0', viewValue: '0'},
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10'},
    {value: '11', viewValue: '11'},
    {value: '12', viewValue: '12'},
    {value: '13', viewValue: '13'},
    {value: '14', viewValue: '14'},
    {value: '15', viewValue: '15'},
    {value: '16', viewValue: '16'},
    {value: '17', viewValue: '17'},
    {value: '18', viewValue: '18'},
    {value: '19', viewValue: '19'},
    {value: '20', viewValue: '20'},
    {value: '21', viewValue: '21'},
    {value: '22', viewValue: '22'},
    {value: '23', viewValue: '23'},
  ];

  horaSeleccionada : string = this.horas[0].value;

  establecerFecha(type: string, event: MatDatepickerInputEvent<Date>) {
    this.fechaSeleccionada = event.value;
    //console.log(`fecha establecida: ${this.fechaSeleccionada}`);
  }

  establecerHora(event: Event) {
    this.horaSeleccionada = (event.target as HTMLSelectElement).value;
    //console.log(`hora establecida: ${this.horaSeleccionada}`);
  }

  establecerPlaca(event: Event) {
    this.placa = (event.target as HTMLInputElement).value;
    //console.log(`placa: ${this.placa}`);
    this.findAll();
  }

  constructor(
    private vehiculosService: VehiculosService,
    private restriccionesService: RestriccionesService,
    private horariosService: HorariosService,
    private dialog: MatDialog) {}


  ngOnInit(): void {
    this.findAll();
  }

  private findAll() {
    this.vehiculosService.search(this.placa.toUpperCase()).subscribe(vehiculos => {
      this.vehiculos = new MatTableDataSource(vehiculos);
      this.vehiculos.sort = this.sort;
      this.vehiculos.paginator = this.paginator;
    });

  }

  consultarRestriccionVehicular(vehiculo: Vehiculo) {

    if (this.fechaSeleccionada !== null) {
      let fechaHoraSeleccionada : Date = DateUtils.combine(this.fechaSeleccionada, this.horaSeleccionada);
      let restriccion: Restriccion;
      this.restriccionesService.findByPlacaAndFecha(vehiculo.placa, fechaHoraSeleccionada).pipe(

        switchMap(
          (restricciones: Restriccion[]) => {
            let [auxRestriccion] = restricciones;
            restriccion = auxRestriccion;
            return this.horariosService.findByPlaca(restriccion.placa);
          }

        ))

        .subscribe(horarios => {
        this.dialog.open(RestriccionVehiculoFrmComponent, { data : {vehiculo, restriccion, horarios}});
      }, error => {
        alert(`Fecha y hora es menor que la fecha y hora actual!`);
      });
    }
  }

  onAdd(vehicle: Vehiculo) {
    this.findAll();
  }

}
