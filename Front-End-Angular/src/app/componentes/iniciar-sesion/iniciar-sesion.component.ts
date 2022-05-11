import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ToastrService } from 'ngx-toastr';
import {TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  isLoginFail = false; 
  errMsj!: string;
  form: FormGroup;
  
    constructor(
      private fb: FormBuilder, 
      private authService: AutenticacionService, 
      private router: Router,
      private tokenService: TokenService,
      private toastr: ToastrService
      ) { 
      this.form = this.fb.group(
        {
          nombreUsuario:["", [Validators.required, Validators.minLength(3)]],
          password:["", [Validators.required, Validators.minLength(3)]],
         
      }
      )
    }
    get NombreUsuario() {
      return this.form.get("nombreUsuario");
    }
    get Password() {
      return this.form.get("password");
    }
  
    ngOnInit(): void {
      
    }
  
  onLogin(): void {  
    this.authService.login(this.form.value).subscribe({
      next: (data)=> {
             
        this.tokenService.setToken(data.token);
       
        this.toastr.success('Bienvenido ' + (this.form.value.nombreUsuario), 'Sesión Iniciada', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/portfolio']);
      },
      error: (err) => {
       
    this.isLoginFail= true;
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Nombre de usuario y contraseña requeridos', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
        console.log(err.error.message);
        /*this.errorMessage = err.error.message;
        console.log(err.error.message);*/
      }
    })
  }

}
