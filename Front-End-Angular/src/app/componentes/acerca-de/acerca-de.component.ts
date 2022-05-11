import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import {faPlus } from '@fortawesome/free-solid-svg-icons';
import { Acercade } from '../../models/acerca-de';
import {Router} from '@angular/router';
import { AcercaDeService } from '../../servicios/acerca-de.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/servicios/token.service';
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
  faPlus = faPlus;

  form:FormGroup;
  isAdmin: boolean = false;
  
  
  
  
  constructor(
    private router: Router,
    private datosAcercaDe: AcercaDeService,
    private fb:FormBuilder, 
    private toastr: ToastrService,
    private tokenService: TokenService
    ) {
      this.form =this.fb.group ({
        id: [''],
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
      this.isAdmin = this.tokenService.isAdmin();
    });
    
  }
  
  
  eliminar(id:any){
    if (confirm("Estás seguro de que quiere eliminar el texto?")) {
  this.datosAcercaDe.deleteAcercade(id).subscribe(data => {
  this.ngOnInit();
    this.datos =data;
    this.toastr.success('La descripción ha sido eliminada correctamente!', 'Texto eliminado!');
  
  });
  }
  }
 

  onSubmit(){
    
    if (this.form.valid)
      {
    let datos:Acercade = this.form.value;
    if (this.form.get('id')?.value == '') {
      this.datosAcercaDe.addAcercaDe(datos).subscribe(
        (newAcercade: Acercade) => {
          this.datos.push(newAcercade);
          this.form.reset();
          document.getElementById("cerrarModalAcercade")?.click();
          
          
    }
      );
     

  } else {
    let datos:Acercade = this.form.value;
    this.datosAcercaDe.editAcercade(datos).subscribe(
      () => {
        this.ngOnInit();
        this.form.reset();
        document.getElementById("cerrarModalAcercade")?.click();
        this.toastr.success('La descripción ha sido actualizada correctamente!', 'Texto actualizado!');
      }
    )
  }
      }
  else{
    //alert("Hay errores");
    this.form.markAllAsTouched();
  }

  }

  
  
  onEditAcercade(index: number) {
    let datos: Acercade = this.datos[index];
    this.loadForm(datos);
  }

  private loadForm(datos: Acercade) {
    this.form.setValue({
      id: datos.id,
      texto: datos.texto,
      
    })
  }

  limpiarform() {
    this.form.reset();
  }

 
  


}
