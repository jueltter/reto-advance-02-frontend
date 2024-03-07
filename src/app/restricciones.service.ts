import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Restriccion } from "./restriccion";
import { DateUtils} from "./date-utils";

interface RestriccionDTO {
  placa: string;
  fecha: string;
  puedeCircular: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RestriccionesService {

  private url = 'http://localhost:8081/restricciones';

  constructor(private http: HttpClient) {}

  findByPlacaAndFecha(placa: string, fecha: Date): Observable<Restriccion[]> {
    let params = new HttpParams()
      .set('placa', placa)
      .set('fecha', DateUtils.dateToString(fecha));

    return this.http.get<RestriccionDTO[]>(this.url, {params}).pipe(
      map(restricciones => restricciones.map(restriccion => {
        return { placa: restriccion.placa, fecha: DateUtils.stringToDate(restriccion.fecha), puedeCircular: restriccion.puedeCircular};
      }))
    );
  }
}
