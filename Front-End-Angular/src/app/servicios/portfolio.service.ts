import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Banner } from '../models/banner';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiURL ="http://localhost:3000/banner"
  
  constructor(
    private http:HttpClient) { }

  obtenerDatos():Observable<Banner[]> {
    return this.http.get<Banner[]>(`${this.apiURL}`);
  }
}
