import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  Observable } from 'rxjs';

import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';
import { config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) {}
    public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
      return this.http.post<JwtDTO>(config.baseUrl + 'auth/login', loginUsuario);
    }
}


