import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import { Acercade } from '../../models/acerca-de';
import {Router} from '@angular/router';
import { AcercaDeService } from '../../servicios/acerca-de.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  datos:Acercade[] = [];
  
  acercaDe: any;
  
  faTrashCan = faTrashCan;
  faPencil = faPencil;
  usuarioAutenticado:boolean=true;
  form:FormGroup;
  
  
  
  
  constructor(
    private router: Router,
    private datosAcercaDe: AcercaDeService,
    private fb:FormBuilder
    ) {
      this.form =this.fb.group ({
        texto:["", [Validators.required, Validators.minLength(50), Validators.maxLength(255)]]
      })
     }
     get texto()
     {
       return this.form.get("texto");
     }

  ngOnInit(): void {
    this.datosAcercaDe.getAcercaDe().subscribe(data => {

      this.datos = data;
    
    });
    
  }

  
  eliminar(id:any){
  this.datosAcercaDe.deleteAcercade(id).subscribe(data => {
  this.ngOnInit();
    this.datos =data;
  });
  }
  guardarAcercade(){

     if (this.form.valid)
    {
      
        this.datosAcercaDe.addAcercaDe(this.form.value).subscribe(FORM => {
        this.datos.push(FORM);
        this.ngOnInit();

      })

      this.form.reset();
      document.getElementById("cerrarModalAcercade")?.click();
      
      
    }
    else{
      //alert("Hay errores");
      this.form.markAllAsTouched();
    }
  }
  
  
  limpiarform() {
    this.form.reset();
  }


  


}
