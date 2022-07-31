import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/servicios/skill.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: Skill[] = [];
  
  constructor(public skillService: SkillService, private tokenService: TokenService) { }

  isLoged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()) {
      this.isLoged = true;
    } else {
      this.isLoged = false;
    }
  }
  cargarSkill(): void {
    this.skillService.lista().subscribe(data =>{this.skill = data})
  }
  deleteSkill(id?: number){
    if( id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.skillService.lista().subscribe(data =>{this.skill = data});
          alert ("Se elimino el elemento");
        }, err => {
          alert("No se pudo eliminar el elemento");
        }
      )
    }
  }
}
