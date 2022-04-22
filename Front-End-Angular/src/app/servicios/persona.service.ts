import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiURL ="http://localhost:3000/persona"
  
  constructor(
    private http:HttpClient) { }

  getDatos():Observable<any> {
    return this.http.get(`${this.apiURL}`);
  }

  addPersona(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(`${this.apiURL}`, persona);
  }

}

