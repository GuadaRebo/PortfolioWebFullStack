import { Component, OnInit } from '@angular/core';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import {faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  faTrashCan = faTrashCan;
  faPencil = faPencil;
  faPlus = faPlus;
  usuarioAutenticado:boolean=true;
  form:FormGroup;
  datos: Educacion[] = []

  constructor(
    private datosEducacion:EducacionService,
    private fb:FormBuilder,
    private toastr: ToastrService,
  ) {this.form =this.fb.group ({
    id: [''],
    titulo:["", [Validators.required, Validators.minLength(5)]],
    expedido_por:["", [Validators.required, Validators.minLength(5)]],
    periodo:["", [Validators.required, Validators.minLength(5)]],
    logo_institucion:["", [Validators.required, Validators.minLength(5)]],
    
  }) }

  get titulo()
  {
    return this.form.get("titulo");
  }
  
  get expedido_por()
  {
    return this.form.get("expedido_por");
  }
  get periodo()
  {
    return this.form.get("periodo");
  }
  get logo_institucion()
  {
    return this.form.get("logo_institucion");
  }

  ngOnInit(): void {
    this.datosEducacion.getDatos().subscribe(data => {
      this.datos = data;
     
})
  }

onSubmit() {
  console.log("El boton anda")
  if (this.form.valid)
    {
  let datos: Educacion = this.form.value;
  if (this.form.get('id')?.value == '') {
    console.log(datos)
    this.datosEducacion.addEducacion(datos).subscribe(
      (newEducacion: Educacion) => {
        this.datos.push(newEducacion);
        this.form.reset();
        document.getElementById("cerrarModalEducacion")?.click();
        
        
  }
    );
   

} else {
  let datos:Educacion = this.form.value;
  this.datosEducacion.editEducacion(datos).subscribe(
    () => {
      this.ngOnInit();
      this.form.reset();
      document.getElementById("cerrarModalEducacion")?.click();
      this.toastr.success('Los datos han sido actualizados correctamente!', 'Información actualizada!');
    }
  )
}
    }
else{
  //alert("Hay errores");
  this.form.markAllAsTouched();
}

}

onEditEducacion(index: number){
  let datos: Educacion = this.datos[index];
  this.loadForm(datos);
}
private loadForm(datos: Educacion) {
  this.form.setValue({
    id: datos.id,
    titulo: datos.titulo,
    expedido_por: datos.expedido_por,
    periodo: datos.periodo,
    logo_institucion: datos.logo_institucion
    
  })
}

eliminar(id:any){
  if (confirm("Estás seguro de que quiere eliminar el texto?")) {
    this.datosEducacion.deleteEducacion(id).subscribe(data => {
    this.ngOnInit();
      this.datos =data;
      this.toastr.success('Los datos han sido eliminados correctamente!', 'Información eliminada!');
    });
    }
}

  limpiarform() {
    this.form.reset();
  }

  onDrop(event: CdkDragDrop<string []>) {
    moveItemInArray(
      this.datos,
      event.previousIndex,
      event.currentIndex
    )
  }

}
