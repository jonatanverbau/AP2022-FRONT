import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-newproyectos',
  templateUrl: './newproyectos.component.html',
  styleUrls: ['./newproyectos.component.css']
})
export class NewproyectosComponent implements OnInit {
  imgProy: String = "";
  nombreProy: String = "";
  descProy: String = "";
  urlProy: String = "";
  constructor(private sProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.imgProy, this.nombreProy, this.descProy, this.urlProy);
    this.sProyecto.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}