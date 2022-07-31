import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {
  nombreSkill!: string;
  img!: string;
  nivelSkill!: number;
  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }
  onNewSkill(): void {
    const skill = new Skill(this.img, this.nombreSkill, this.nivelSkill);

    this.skillService.save(skill).subscribe(
      data => {
        alert("Skill añadido");
        this.router.navigate(['']);
      }, err=> {
        alert("No se pudo añadir el skill");
        this.router.navigate(['']);
      }
    );
  }
  volver(){
    this.router.navigate(['/']);
  }
}
