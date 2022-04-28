import { Injectable } from '@angular/core';
import {Persona} from '../models/persona';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DatabannerService {
  datos: Persona[] = []
  form:FormGroup;
  datosBanner: string = "Guada";

  constructor(private fb:FormBuilder) {this.form =this.fb.group ({
    id: [''],
    nombres:["", [Validators.required, Validators.minLength(5)]],
    apellido:["", [Validators.required, Validators.minLength(5)]],
    domicilio:["", [Validators.required, Validators.minLength(5)]],
    imagen_cv:["", [Validators.required, Validators.minLength(5)]],
    position:["", [Validators.required, Validators.minLength(5)]],
    imagen_banner:["", [Validators.required, Validators.minLength(5)]],
  })
 }

 onEditBanner(index: number) {
  let datos: Persona = this.datos[index];
  this.loadForm(datos);
}
  private loadForm(datos: Persona) {
    this.form.setValue({
      id: datos.id,
      nombres: datos.nombres,
      apellido: datos.apellido,
      domicilio:datos.domicilio,
      imagen_cv: datos.imagen_cv,
      position: datos.position,
      imagen_banner: datos.imagen_banner
      
    })
  }
}
