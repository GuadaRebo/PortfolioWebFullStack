import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PortfolioService} from '../../servicios/portfolio.service';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import { Acercade } from '../../models/acerca-de';
import {Router} from '@angular/router';
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  @Output() eliminarac: EventEmitter<Acercade> = new EventEmitter()
  acercade: any;
  miPortfolio:any;
  faTrashCan = faTrashCan;
  faPencil = faPencil;
  constructor(private datosPortfolio:PortfolioService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio = data;
    });
  

  }
eliminar(){
this.miPortfolio.eliminar();

}
onDelete(acercade: Acercade){
  this.eliminarac.emit(acercade);
}
hasRoute(route: string) {
  return this.router. url === route
}



}
