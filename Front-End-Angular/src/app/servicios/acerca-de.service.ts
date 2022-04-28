import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acercade } from '../models/acerca-de';
import { config } from '../models/config';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'aplication/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

 
constructor(
    private http: HttpClient) {}

  getAcercaDe():Observable <Acercade[]> {
    return this.http.get<any>(config.baseUrl + "acercade");
  }

  addAcercaDe(acercade: Acercade): Observable<Acercade>{
    return this.http.post<any>(config.baseUrl + "acercade", acercade, httpOptions);
  }

  editAcercade(acercade: Acercade): Observable<any>{
    return this.http.put<any>(config.baseUrl + "acercade", acercade, httpOptions);
  }
  
    deleteAcercade(id: number): Observable<any> {
      return this.http.delete(config.baseUrl + "acercade/" + id);
    }


}


