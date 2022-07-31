import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { SExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-newlaboral',
  templateUrl: './newlaboral.component.html',
  styleUrls: ['./newlaboral.component.css']
})
export class NewlaboralComponent implements OnInit {
  nombreExp: string = '';
  lugarExp : string = '';
  anioIniExp : number = 0;
  anioFinExp : number = 0;
  imgExp : string = '';
  descExp : string = '';
  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreExp, this.lugarExp, this.anioIniExp, this.anioFinExp, this.imgExp, this.descExp);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}