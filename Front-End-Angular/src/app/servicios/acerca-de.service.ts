import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acercade } from '../models/acerca-de';
import { config } from '../models/config';


@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

 
constructor(
    private http: HttpClient) {}

  getAcercaDe():Observable <Acercade[]> {
    return this.http.get<any>(config.baseUrl + "acercade/ver");
  }

  addAcercaDe(acercade: Acercade): Observable<Acercade>{
    return this.http.post<any>(config.baseUrl + "acercade/nuevo", acercade);
  }

  editAcercade(acercade: Acercade): Observable<any>{
    return this.http.put<any>(config.baseUrl + "acercade", acercade);
  }
  
    deleteAcercade(id: number): Observable<any> {
      return this.http.delete(config.baseUrl + "acercade/delete/" + id);
    }


}


