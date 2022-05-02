import { Component, OnInit } from '@angular/core';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import {faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExpLaboralService} from 'src/app/servicios/exp-laboral.service';
import { ExpLaboral } from '../../models/expLaboral';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  faTrashCan = faTrashCan;
  faPencil = faPencil;
  faPlus = faPlus;
  usuarioAutenticado:boolean=true;
  form:FormGroup;
  datos: ExpLaboral[] = []
  constructor(
    private datosExpLaboral:ExpLaboralService,
    private fb:FormBuilder,
    private toastr: ToastrService,
  ) {this.form =this.fb.group ({
    id: [''],
    posicion:["", [Validators.required, Validators.minLength(5)]],
    fecha:["", [Validators.required, Validators.minLength(5)]],
    descripcion:["", [Validators.required, Validators.minLength(5)]],
    foto:["", [Validators.required, Validators.minLength(5)]],
    
  }) }

  get posicion()
  {
    return this.form.get("posicion");
  }
  
  get fecha()
  {
    return this.form.get("fecha");
  }
  get descripcion()
  {
    return this.form.get("descripcion");
  }
  get foto()
  {
    return this.form.get("foto");
  }
  
  ngOnInit(): void {
      this.datosExpLaboral.getDatos().subscribe(data => {
        this.datos = data;
       
  })
}


  onSubmit(){
    console.log("El boton anda")
    if (this.form.valid)
      {
    let datos: ExpLaboral = this.form.value;
    if (this.form.get('id')?.value == '') {
      console.log(datos)
      this.datosExpLaboral.addExpLaboral(datos).subscribe(
        (newExpLaboral: ExpLaboral) => {
          this.datos.push(newExpLaboral);
          this.form.reset();
          document.getElementById("cerrarModalExpLaboral")?.click();
          
          
    }
      );
     

  } else {
    let datos:ExpLaboral = this.form.value;
    this.datosExpLaboral.editExpLaboral(datos).subscribe(
      () => {
        this.ngOnInit();
        this.form.reset();
        document.getElementById("cerrarModalExpLaboral")?.click();
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


  limpiarform() {
    this.form.reset();
  }

  eliminar(id:any){
    if (confirm("Estás seguro de que quiere eliminar el texto?")) {
    this.datosExpLaboral.deleteExpLaboral(id).subscribe(data => {
    this.ngOnInit();
      this.datos =data;
      this.toastr.success('Los datos han sido eliminados correctamente!', 'Información eliminada!');
    });
    }
  }
    onEditExpLaboral(index: number) {
      let datos: ExpLaboral = this.datos[index];
      this.loadForm(datos);
    }
  
    private loadForm(datos: ExpLaboral) {
      this.form.setValue({
        id: datos.id,
        posicion: datos.posicion,
        fecha: datos.fecha,
        descripcion: datos.descripcion,
        foto: datos.foto
        
      })
    }


}
