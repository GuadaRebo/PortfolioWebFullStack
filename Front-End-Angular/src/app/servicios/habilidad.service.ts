import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidades } from '../models/habilidades';
import { config } from '../models/config';


@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  constructor(
    private http: HttpClient
  ) { }

  getHabilidad():Observable <Habilidades[]> {
    return this.http.get<any>(config.baseUrl + "habilidad/ver");
  }

  addHabilidad(habilidad: Habilidades): Observable<Habilidades>{
    return this.http.post<any>(config.baseUrl + "habilidad/nueva", habilidad);
  }

  editHabilidad(habilidad: Habilidades): Observable<any>{
    return this.http.put<any>(config.baseUrl + "habilidad", habilidad);
  }
  
    deleteHabilidad(id: number): Observable<any> {
      return this.http.delete(config.baseUrl + "habilidad/delete/" + id);
    }

}
