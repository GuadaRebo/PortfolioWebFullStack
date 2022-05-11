import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import {PortfolioComponent} from './componentes/portfolio/portfolio.component'
import { GuardService as guard} from './servicios/guard.service';

const appRoutes: Routes = [
  {path: 'portfolio', component: PortfolioComponent, canActivate: [guard], data: {expectedRol: ['admin', 'user']}},
  {path: 'iniciar-sesion', component: IniciarSesionComponent}, 
  
  {path: '**', redirectTo: 'iniciar-sesion', pathMatch: 'full'},
  {path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full'},
  
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
