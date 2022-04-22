import { Component, OnInit } from '@angular/core';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExpLaboralService} from 'src/app/servicios/exp-laboral.service';
import { ExpLaboral } from '../../models/expLaboral';
@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  faTrashCan = faTrashCan;
  faPencil = faPencil;
  usuarioAutenticado:boolean=true;
  form:FormGroup;
  datos: ExpLaboral[] = []
  constructor(
    private datosExpLaboral:ExpLaboralService,
    private fb:FormBuilder,
  ) {this.form =this.fb.group ({
    posicion:["", [Validators.required, Validators.minLength(5)]],
    empresa:[""],
    fecha:["", [Validators.required, Validators.minLength(5)]],
    descripcion:["", [Validators.required, Validators.minLength(5)]],
    foto:["", [Validators.required, Validators.minLength(5)]],
    
  }) }

  get posicion()
  {
    return this.form.get("posicion");
  }
  get empresa()
  {
    return this.form.get("empresa");
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

addOredit(){
  this.guardarExpLaboral()
    }
  guardarExpLaboral(){
    this.datosExpLaboral.addExpLaboral(this.form.value).subscribe(data =>{
      this.datos.push(data);
      this.form.reset();
      document.getElementById("cerrarModalExpLaboral")?.click();
    })
  }


  limpiarform() {
    this.form.reset();
  }

  eliminar(id:any){
    this.datosExpLaboral.deleteExpLaboral(id).subscribe(data => {
    this.ngOnInit();
      this.datos =data;
    });
    }

}
