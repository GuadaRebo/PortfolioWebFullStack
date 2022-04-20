import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import {PortfolioComponent} from './componentes/portfolio/portfolio.component'


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
