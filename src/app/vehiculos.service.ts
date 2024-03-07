import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import { HttpClient} from "@angular/common/http";
import { Vehiculo} from "./vehiculo";

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private url = 'http://localhost:8081/vehiculos';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.url);
  }
}
