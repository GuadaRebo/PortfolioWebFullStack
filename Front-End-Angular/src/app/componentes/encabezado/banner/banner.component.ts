import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import { Persona } from '../../../models/persona';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  datos: Persona[] = []
  
  banner:any;
  faTrashCan = faTrashCan;
  faPencil = faPencil;
  usuarioAutenticado:boolean=true;
  form:FormGroup;

  constructor(
    private router: Router,
    private datosPersona:PersonaService,
    private fb:FormBuilder
    ) {this.form =this.fb.group ({
      nombres:["", [Validators.required, Validators.minLength(5)]],
      apellido:["", [Validators.required, Validators.minLength(5)]],
      domicilio:["", [Validators.required, Validators.minLength(5)]],
      imagen_cv:["", [Validators.required, Validators.minLength(5)]],
      position:["", [Validators.required, Validators.minLength(5)]],
      imagen_banner:["", [Validators.required, Validators.minLength(5)]],
    })
   }

   get nombres()
     {
       return this.form.get("nombres");
     }
     get apellido()
     {
       return this.form.get("apellido");
     }
     get domicilio()
     {
       return this.form.get("domicilio");
     }
     get imagen_cv()
     {
       return this.form.get("imagen_cv");
     }
     get position()
     {
       return this.form.get("position");
     }
     get imagen_banner()
     {
       return this.form.get("imagen_banner");
     }

  ngOnInit(): void {
    this.datosPersona.getDatos().subscribe(data => {
      this.datos = data;
    });
  }

  addOredit(){
this.guardarDatosPersona()
  }
guardarDatosPersona(){
  this.datosPersona.addPersona(this.form.value).subscribe(data =>{
    this.datos.push(data);
    this.form.reset();
    document.getElementById("cerrarModalPersona")?.click();
  })
}

limpiarform() {
    this.form.reset();
  }
  
}
