import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PieComponent } from './componentes/pie/pie.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoAPComponent } from './componentes/encabezado/logo-ap/logo-ap.component';
import { RedesyloginComponent } from './componentes/encabezado/redesylogin/redesylogin.component';
import { BotonloginComponent } from './componentes/encabezado/redesylogin/botonlogin/botonlogin.component';
import { BannerComponent } from './componentes/encabezado/banner/banner.component';
import { FotocvComponent } from './componentes/encabezado/fotocv/fotocv.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import {AcercaDeService} from '../app/servicios/acerca-de.service'
import { PersonaService} from '../app/servicios/persona.service';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import {AutenticacionService} from '../app/servicios/autenticacion.service';
import { InterceptorService} from '../app/servicios/interceptor.service';
import { ContactoService} from '../app/servicios/contacto.service';
import { ExpLaboralService} from '../app/servicios/exp-laboral.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EducacionService } from './servicios/educacion.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HabilidadService } from './servicios/habilidad.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    PieComponent,
    LogoAPComponent,
    RedesyloginComponent,
    BotonloginComponent,
    BannerComponent,
    FotocvComponent,
    IniciarSesionComponent,
    PortfolioComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DragDropModule,
  ],
  providers: [AcercaDeService, PersonaService, AutenticacionService, ContactoService, ExpLaboralService, EducacionService, HabilidadService,
  { provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
