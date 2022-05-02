import { Component, OnInit } from '@angular/core';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import {faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Habilidades } from 'src/app/models/habilidades';
import { HabilidadService} from '../../servicios/habilidad.service';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  faTrashCan = faTrashCan;
  faPencil = faPencil;
  faPlus = faPlus;
  usuarioAutenticado:boolean=true;
  form:FormGroup;
  datos:Habilidades[] = [];

  constructor(
    private datosHabilidad: HabilidadService,
    private fb:FormBuilder, 
    private toastr: ToastrService, 
  ) {
    this.form =this.fb.group ({
      id: [''],
      habilidad: ["", [Validators.required, Validators.minLength(5)]],
      porcentaje:["", [Validators.required, Validators.pattern("[0-9]"), Validators.min(10), Validators.max(100)]]
    })
   }
   get habilidad()
     {
       return this.form.get("habilidad");
     }
     get porcentaje()
     {
       return this.form.get("porcentaje");
     }

  ngOnInit(): void {
    this.datosHabilidad.getHabilidad().subscribe(data => {

      this.datos = data;
    
    });
  }

onSubmit() {
  
    if (this.form.valid)
      {
    let datos:Habilidades = this.form.value;
    if (this.form.get('id')?.value == '') {
      this.datosHabilidad.addHabilidad(datos).subscribe(
        (newHabilidad: Habilidades) => {
          this.datos.push(newHabilidad);
          this.form.reset();
          document.getElementById("cerrarModalHabilidad")?.click();
          
          
    }
      );
     

  } else {
    let datos:Habilidades = this.form.value;
    this.datosHabilidad.editHabilidad(datos).subscribe(
      () => {
        this.ngOnInit();
        this.form.reset();
        document.getElementById("cerrarModalHabilidad")?.click();
        this.toastr.success('La habilidad ha sido actualizada correctamente!', 'Habilidad actualizada!');
      }
    )
  }
      }
  else{
    //alert("Hay errores");
    this.form.markAllAsTouched();
  }


}

 eliminar(id:any) {
  if (confirm("Estás seguro de que quiere eliminar la habilidad?")) {
    this.datosHabilidad.deleteHabilidad(id).subscribe(data => {
    this.ngOnInit();
      this.datos =data;
      this.toastr.success('La habilidad ha sido eliminada correctamente!', 'Habilidad eliminada!');
    
    });
    }

 }
onEditHabilidad(index:number) {
  let datos: Habilidades = this.datos[index];
  this.loadForm(datos);
}

private loadForm(datos: Habilidades) {
  this.form.setValue({
    id: datos.id,
    habilidad: datos.habilidad,
    porcentaje: datos.porcentaje
    
  })
}
  limpiarform() {

  }

}
