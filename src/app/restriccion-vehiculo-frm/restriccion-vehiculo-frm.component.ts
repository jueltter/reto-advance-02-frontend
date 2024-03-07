import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { DateUtils} from "../date-utils";
import { VehiculoRestriccion } from "../vehiculo-restriccion";

@Component({
  selector: 'app-restriccion-vehiculo-frm',
  templateUrl: './restriccion-vehiculo-frm.component.html',
  styleUrls: ['./restriccion-vehiculo-frm.component.css']
})
export class RestriccionVehiculoFrmComponent {
  mensaje : string | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: VehiculoRestriccion,
    private dialogRef: MatDialogRef<RestriccionVehiculoFrmComponent>) {
    this.mensaje = `A la fecha y hora ${DateUtils.dateToString(this.data.restriccion.fecha)}, el vehículo con placa ${this.data.restriccion.placa} ${this.data.restriccion.puedeCircular ? 'si': 'no'} puede circular.`;
  }
}
