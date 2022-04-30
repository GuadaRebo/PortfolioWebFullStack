import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Persona } from '../models/persona';
import { config } from '../models/config';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiURL ="http://localhost:8080/"
  
  constructor(
    private http:HttpClient) { }

  getDatos():Observable<Persona[]> {
    return this.http.get<any>(config.baseUrl + "persona/ver");
  }

  addPersona(persona: Persona): Observable<Persona>{
   return this.http.post<any>(config.baseUrl + "persona/nueva", persona);
  }

  editPersona(persona: Persona): Observable<any>{
    return this.http.put<any>(config.baseUrl + "persona", persona);
  }

}

