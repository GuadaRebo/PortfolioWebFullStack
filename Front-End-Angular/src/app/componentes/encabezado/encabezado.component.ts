import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
miPortfolio:any;
  constructor(private datosPersona:PersonaService) { }

  ngOnInit(): void {
    this.datosPersona.getDatos().subscribe(data => {
      console.log("Datos personales:" + JSON.stringify(data));
      this.miPortfolio = data[0];
    });
  }

}
