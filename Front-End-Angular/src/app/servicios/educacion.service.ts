import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { config } from '../models/config';
import { Educacion } from '../models/educacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(
    private http:HttpClient
  ) { }

  getDatos():Observable<any> {
    return this.http.get(config.baseUrl + "educacion/ver");
  }

  addEducacion(educacion: Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(config.baseUrl + "educacion/nueva", educacion);
  }
  deleteEducacion(id: number): Observable<any> {
    return this.http.delete(config.baseUrl + "educacion/delete/" + id);
  }
  editEducacion(educacion: Educacion): Observable<any>{
    return this.http.put<any>(config.baseUrl + "educacion", educacion);
  }

}

