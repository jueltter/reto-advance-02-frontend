import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Horario} from "./horario";
import {map, Observable} from "rxjs";

interface HorarioDTO {
  id: number;
  diaSemana: number;
  terminaPlaca: string;
  inicio: string;
  fin: string;
}

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  private url = environment.backendUrl + '/horarios';

  constructor(private http: HttpClient) {

  }

  findByPlaca(placa: String): Observable<Horario[]> {
    return this.http.get<HorarioDTO[]>(this.url).pipe(map((horariosDTO: HorarioDTO[]) => horariosDTO
      .map(horarioDTO => ({
      id: horarioDTO.id,
        diaSemana: horarioDTO.diaSemana,
        terminaPlaca: JSON.parse(horarioDTO.terminaPlaca),
        inicio: horarioDTO.inicio,
        fin: horarioDTO.fin
    })

      )
      .filter (horario => horario.terminaPlaca.includes(placa.substring(placa.length -1)))

    ));
  }

}
