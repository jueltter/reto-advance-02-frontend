import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import { HttpClient, HttpParams} from "@angular/common/http";
import { Vehiculo} from "./vehiculo";
import { environment } from "../environments/environment";
import {DateUtils} from "./date-utils";

interface VehiculoDTO {
  placa: string;
  color: string;
  modelo: string;
  chasis: string;
  kilometraje: number;
  anioModelo: number;
  marca: string;
}

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private url = environment.backendUrl + '/vehiculos';

  constructor(private http: HttpClient) { }

  search(placa : string): Observable<Vehiculo[]> {
    let params = new HttpParams()
      .set('placa', placa);

    return this.http.get<Vehiculo[]>(this.url, {params});
  }

  create(vehiculo : VehiculoDTO) : Observable<Vehiculo> {
    return this.http.post<Vehiculo>(this.url, vehiculo);
  }
}
