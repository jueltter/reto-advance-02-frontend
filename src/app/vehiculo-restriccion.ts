import {Vehiculo} from "./vehiculo";
import {Restriccion} from "./restriccion";
import {Horario} from "./horario";

export interface VehiculoRestriccion {
  vehiculo : Vehiculo;
  restriccion : Restriccion;
  horarios: Horario[]
}
