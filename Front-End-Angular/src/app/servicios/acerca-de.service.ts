import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acercade } from '../models/acerca-de';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'aplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {
private apiURL =' http://localhost:3000/acercade'
 
constructor(
    private http: HttpClient) {}

  getAcercaDe():Observable <any> {
    return this.http.get(`${this.apiURL}`);
  }

  addAcercaDe(acercade: Acercade): Observable<Acercade>{
    return this.http.post<Acercade>(`${this.apiURL}`, acercade, httpOptions);
  }

  editAcercade(acercade: Acercade, id: number): Observable<Acercade>{
    return this.http.put<Acercade>(
      `${this.apiURL}/${id}`,
      acercade,
      httpOptions);
  }

    deleteAcercade(id: number): Observable<any> {
      return this.http.delete(`${this.apiURL}/${id}`);
    }


}


