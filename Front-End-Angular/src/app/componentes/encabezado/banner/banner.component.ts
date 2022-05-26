import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import { Persona } from '../../../models/persona';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabannerService } from 'src/app/servicios/databanner.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  datos: Persona[] = []
  isAdmin: boolean = false;
  banner:any;
  faTrashCan = faTrashCan;
  faPencil = faPencil;
  usuarioAutenticado:boolean=true;
  form:FormGroup;

  constructor(
    private dataService: DatabannerService,
    private router: Router,
    private datosPersona:PersonaService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private fb:FormBuilder

    ) {this.form =this.fb.group ({
      id: [''],
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
      this.isAdmin = this.tokenService.isAdmin();
    });
  }

  edit(){
    let datos:Persona = this.form.value;
    
    this.datosPersona.editPersona(datos).subscribe(
      () => {
        
        this.ngOnInit();
        this.toastr.success('Sus datos han sido actualizados correctamente!', 'Datos actualizados!'); 
      }
    )
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
