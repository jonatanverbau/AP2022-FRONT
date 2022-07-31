import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreEdu: string = '';
  lugarEdu : string = '';
  anioEdu : number = 0;
  imgEdu : string = '';
  descEdu : string = '';
  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreEdu, this.lugarEdu, this.anioEdu, this.imgEdu, this.descEdu);
    this.sEducacion.save(educacion).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}