import { Component, OnInit } from '@angular/core';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import {faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  faTrashCan = faTrashCan;
  faPencil = faPencil;
  faPlus = faPlus;
  usuarioAutenticado:boolean=true;
  form:FormGroup;
  datos: Proyecto[] = []


  constructor(
    private datosProyecto:ProyectoService,
    private fb:FormBuilder,
    private toastr: ToastrService,
  ) {this.form =this.fb.group ({
    id: [''],
    nombre:["", [Validators.required, Validators.minLength(5)]],
    fecha:["", [Validators.required, Validators.minLength(5)]],
    herramientas:["", [Validators.required, Validators.minLength(5)]],
    link:["", [Validators.required, Validators.minLength(5)]],
    foto:["", [Validators.required, Validators.minLength(5)]],
    
  }) }

  get nombre()
  {
    return this.form.get("nombre");
  }
  
  get fecha()
  {
    return this.form.get("fecha");
  }
  get herramientas()
  {
    return this.form.get("herramientas");
  }
  get link()
  {
    return this.form.get("link");
  }
  get foto()
  {
    return this.form.get("foto");
  }


  ngOnInit(): void {
    this.datosProyecto.getProyecto().subscribe(data => {
      this.datos = data;
     
})
  }

  onSubmit() {
  
    if (this.form.valid)
      {
    let datos: Proyecto = this.form.value;
    if (this.form.get('id')?.value == '') {
      console.log(datos)
      this.datosProyecto.addProyecto(datos).subscribe(
        (newProyecto: Proyecto) => {
          this.datos.push(newProyecto);
          this.form.reset();
          document.getElementById("cerrarModalProyecto")?.click();     
          
    }
      );    
  
  } else {
    let datos:Proyecto = this.form.value;
    this.datosProyecto.editProyecto(datos).subscribe(
      () => {
        this.ngOnInit();
        this.form.reset();
        document.getElementById("cerrarModalProyecto")?.click();
        this.toastr.success('El proyecto ha sido actualizado correctamente!', 'Información actualizada!');
      }
    )
  }
      }
  else{
    //alert("Hay errores");
    this.form.markAllAsTouched();
  }
  
  }

  onEditProyecto(index: number){
    let datos: Proyecto = this.datos[index];
    this.loadForm(datos);
  }
  private loadForm(datos: Proyecto) {
    this.form.setValue({
      id: datos.id,
      nombre: datos.nombre,
      fecha: datos.fecha,
      herramientas: datos.herramientas,
      link: datos.link,
      foto: datos.foto
      
    })
  }
  
  eliminar(id:any){
    if (confirm("Estás seguro de que quieres eliminar el proyecto?")) {
      this.datosProyecto.deleteProyecto(id).subscribe(data => {
      this.ngOnInit();
        this.datos =data;
        this.toastr.success('Los datos han sido eliminados correctamente!', 'Información eliminada!');
      });
      }
  }
  
    limpiarform() {
      this.form.reset();
    }
}
