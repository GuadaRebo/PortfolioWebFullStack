import { Injectable } from '@angular/core';
import { Contacto} from '../models/contacto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../models/config';



@Injectable({
  providedIn: 'root'
})
export class ContactoService {


  constructor(
    private http: HttpClient
  ) { }

  addContacto(contacto: Contacto): Observable<Contacto>{
    return this.http.post<Contacto>(config.baseUrl + "contacto/nuevo", contacto)
  }


}
