import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ExpLaboral } from '../models/expLaboral';

@Injectable({
  providedIn: 'root'
})
export class ExpLaboralService {
  private apiURL ="http://localhost:3000/expLaboral"

  constructor(
    private http:HttpClient
  ) { }

  getDatos():Observable<any> {
    return this.http.get(`${this.apiURL}`);
  }

  addExpLaboral(explaboral: ExpLaboral): Observable<ExpLaboral>{
    return this.http.post<ExpLaboral>(`${this.apiURL}`, explaboral);
  }
  deleteExpLaboral(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
