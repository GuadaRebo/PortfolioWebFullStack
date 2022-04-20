import { Component, OnInit } from '@angular/core';
import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import {faPencil } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
@Component({
  selector: 'app-fotocv',
  templateUrl: './fotocv.component.html',
  styleUrls: ['./fotocv.component.css']
})
export class FotocvComponent implements OnInit {
  faTrashCan = faTrashCan;
  faPencil = faPencil;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  hasRoute(route: string) {
    return this.router. url === route
  }
}
