import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-botonlogin',
  templateUrl: './botonlogin.component.html',
  styleUrls: ['./botonlogin.component.css']
})
export class BotonloginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  
  
  

  constructor(
    private tokenService: TokenService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
      
  }


  onLogOut(): void {
    this.tokenService.logOut();
    this.toastr.success('Hasta luego!', 'Sesión Finalizada', {
      timeOut: 3000, positionClass: 'toast-top-center'
    });
    
  }


}
