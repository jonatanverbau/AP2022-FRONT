import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoged=false;
  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLoged = true;
        
    } else {
      this.isLoged = false;  
    };
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  
  login(){
    this.router.navigate(['/login']);
  }
}
