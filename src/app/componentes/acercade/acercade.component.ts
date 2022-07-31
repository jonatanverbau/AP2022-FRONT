import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  persona: persona = new persona("","", "", "", "","");
  isLoged = false;
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  
  ngOnInit(): void {
    this.getDataPersona();
    if (this.tokenService.getToken()) {
      this.isLoged = true;
    } else {
      this.isLoged = false;
    }

  }

  getDataPersona(){
    this.personaService.listPersona().subscribe(data => {this.persona = data});
  }


}
