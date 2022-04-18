import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import { Acercade } from '../../models/acerca-de';
import {Router} from '@angular/router';
import { AcercaDeService } from '../../servicios/acerca-de.service';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  datos:Acercade[] = [];
  @Output() eliminarac: EventEmitter<Acercade> = new EventEmitter()
  acercaDe: any;
  
  faTrashCan = faTrashCan;
  faPencil = faPencil;
  constructor(
    private router: Router,
    private datosAcercaDe: AcercaDeService
    ) { }

  ngOnInit(): void {
    this.obtenerAcercaDe(); 
    
  }

obtenerAcercaDe() {
  this.datosAcercaDe.getAcercaDe().subscribe(datos => {
    
    this.datos = datos;
  });
}
  
eliminar(id:number){
this.datosAcercaDe.deleteAcercade(id).subscribe(data => {
  console.log(data);
  this.acercaDe = data;
})

}
onDelete(acercade: Acercade){
  this.eliminarac.emit(acercade);
}
hasRoute(route: string) {
  return this.router. url === route
}



}
