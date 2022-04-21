import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactoService} from '../../servicios/contacto.service';
import { Contacto} from '../../models/contacto';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  datos:Contacto[] = []; 
form: FormGroup;

  constructor(private fb: FormBuilder, private contactoService: ContactoService) {
    this.form = this.fb.group(
      {
        
        nombre:["", [Validators.required]],
        correo:["", [Validators.required,  Validators.email]],
        mensaje:["", [Validators.required, Validators.maxLength(255)]]
      }
    )
   }

  ngOnInit(): void {
  }
  get Nombre() {
    return this.form.get("nombre");
  }
  get Correo() {
    return this.form.get("correo");
  }
  get Mensaje() {
    return this.form.get("mensaje");
  }

  onEnviar(event: Event){
   
    event.preventDefault;

   
        
    console.log(this.form)
    this.contactoService.addContacto(this.form.value).subscribe(data => {
      this.datos.push(data);
      this.form.reset();
      
    })
  }
}
