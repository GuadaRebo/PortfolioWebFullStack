import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ExpLaboral } from '../models/expLaboral';
import { config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ExpLaboralService {
 
  

  constructor(
    private http:HttpClient
  ) { }

  getDatos():Observable<any> {
    return this.http.get(config.baseUrl + "explaboral/ver");
  }

  addExpLaboral(explaboral: ExpLaboral): Observable<ExpLaboral>{
    return this.http.post<ExpLaboral>(config.baseUrl + "explaboral/nueva", explaboral);
  }
  deleteExpLaboral(id: number): Observable<any> {
    return this.http.delete(config.baseUrl + "explaboral/delete/" + id);
  }
  editExpLaboral(explaboral: ExpLaboral): Observable<any>{
    return this.http.put<any>(config.baseUrl + "explaboral", explaboral);
  }

}
