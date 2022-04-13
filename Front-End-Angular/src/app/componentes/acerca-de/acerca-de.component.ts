import { Component, OnInit } from '@angular/core';
import { PortfolioService} from '../../servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
  }
eliminar(){
this.miPortfolio.eliminar();
}
}
