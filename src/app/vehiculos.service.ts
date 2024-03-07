import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import { HttpClient} from "@angular/common/http";
import { Vehiculo} from "./vehiculo";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private url = environment.backendUrl + '/vehiculos';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.url);
  }
}
