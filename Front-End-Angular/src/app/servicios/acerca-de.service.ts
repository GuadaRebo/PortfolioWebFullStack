import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
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
private apiURL = "./assets/data/data.json";
  constructor(private http: HttpClient) {}

  getAcercaDe(){
    return this.http.get<any>(`${this.apiURL}acercade`);
  }

  addAcercaDe(acercade: Acercade): Observable<Acercade>{
    return this.http.post<Acercade>(`${this.apiURL}acercade`, acercade, httpOptions);
  }

  editAcercade(acercade: Acercade, id: number): Observable<Acercade>{
    return this.http.put<Acercade>(
      `${this.apiURL}acercade/${id}`,
      acercade,
      httpOptions);
  }

    deleteAcercade(id: number): Observable<Acercade> {
      return this.http.delete<Acercade>(`${this.apiURL}acercade/${id}`);
    }


}


