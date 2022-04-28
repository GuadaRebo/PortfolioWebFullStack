import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiURL ="http://localhost:8080/"
  
  constructor(
    private http:HttpClient) { }

  getDatos():Observable<Persona[]> {
    return this.http.get<any>(`${this.apiURL}persona/ver`);
  }

  addPersona(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(`${this.apiURL}`, persona);
  }

  editPersona(persona: Persona): Observable<any>{
    return this.http.put<any>(`${this.apiURL}persona/actualizar/` + persona.id, persona);
  }

}

