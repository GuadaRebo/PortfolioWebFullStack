import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import {PortfolioComponent} from './componentes/portfolio/portfolio.component'
import { GuardService as guard} from './servicios/guard.service';

const appRoutes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  
  {path: 'iniciar-sesion', component: IniciarSesionComponent}, 
  {path: '**', redirectTo: 'portfolio', pathMatch: 'full'},
  {path: '', redirectTo: 'portfolio', pathMatch: 'full'},
  
  
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
