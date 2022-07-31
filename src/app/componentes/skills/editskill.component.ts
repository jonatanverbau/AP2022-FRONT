import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
  skill: Skill = null;
  constructor(private skillService: SkillService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("No se pudo cargar el skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdateSkill(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe(
      data => {
        alert("Skill actualizado");
        this.router.navigate(['']);
      }, err => {
        alert("No se pudo actualizar el skill");
        this.router.navigate(['']);
      }
    )   
  }
  volver(){
    this.router.navigate(['/']);
  }
}
