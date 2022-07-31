import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { SExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})

export class LaboralComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data =>{this.expe = data; })
  }

  delete(id?: number){
    if( id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo eliminar el elemento");
        }
      )
    }
  }
}
