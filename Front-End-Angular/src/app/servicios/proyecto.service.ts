import { Injectable } from '@angular/core';
import { config } from '../models/config';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(
    private http: HttpClient
  ) { }

  getProyecto():Observable <Proyecto[]> {
    return this.http.get<any>(config.baseUrl + "proyecto/ver");
  }

  addProyecto(proyecto: Proyecto): Observable<Proyecto>{
    return this.http.post<any>(config.baseUrl + "proyecto/nuevo", proyecto);
  }

  editProyecto(proyecto: Proyecto): Observable<any>{
    return this.http.put<any>(config.baseUrl + "proyecto", proyecto);
  }
  
    deleteProyecto(id: number): Observable<any> {
      return this.http.delete(config.baseUrl + "proyecto/delete/" + id);
    }

}
