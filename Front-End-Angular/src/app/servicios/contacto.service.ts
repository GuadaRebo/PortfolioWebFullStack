import { Injectable } from '@angular/core';
import { Contacto} from '../models/contacto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiURL =' http://localhost:3000/contacto' 

  constructor(
    private http: HttpClient
  ) { }

  addContacto(contacto: Contacto): Observable<Contacto>{
    return this.http.post<Contacto>(`${this.apiURL}`, contacto)
  }


}
