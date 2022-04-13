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
import {HttpClientModule } from '@angular/common/http';
import { LogoAPComponent } from './componentes/encabezado/logo-ap/logo-ap.component';
import { RedesyloginComponent } from './componentes/encabezado/redesylogin/redesylogin.component';
import { BotonloginComponent } from './componentes/encabezado/redesylogin/botonlogin/botonlogin.component';
import { BannerComponent } from './componentes/encabezado/banner/banner.component';
import { FotocvComponent } from './componentes/encabezado/fotocv/fotocv.component';
import { FormmodalACComponent } from './componentes/acerca-de/formmodal-ac/formmodal-ac.component';


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
    FormmodalACComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
