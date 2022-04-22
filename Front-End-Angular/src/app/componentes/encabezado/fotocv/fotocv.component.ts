import { Component, OnInit } from '@angular/core';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import { Persona } from '../../../models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
@Component({
  selector: 'app-fotocv',
  templateUrl: './fotocv.component.html',
  styleUrls: ['./fotocv.component.css']
})
export class FotocvComponent implements OnInit {
  faTrashCan = faTrashCan;
  faPencil = faPencil;
  datos: Persona[] = []
  usuarioAutenticado:boolean=true;
  constructor(
    private router: Router,
    private datosPersona:PersonaService,
  ) { }

  ngOnInit(): void {
    this.datosPersona.getDatos().subscribe(data => {
      this.datos = data;
    });
  
  }
}
