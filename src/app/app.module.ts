import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { LaboralComponent } from './componentes/laboral/laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor.service';
import { EditlaboralComponent } from './componentes/laboral/editlaboral.component';
import { NewlaboralComponent } from './componentes/laboral/newlaboral.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NewproyectosComponent } from './componentes/proyectos/newproyectos.component';
import { EditproyectosComponent } from './componentes/proyectos/editproyectos.component';
import { EditpersonaComponent } from './componentes/editpersona/editpersona.component';
import { NewskillComponent } from './componentes/skills/newskill.component';
import { EditskillComponent } from './componentes/skills/editskill.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercadeComponent,
    LaboralComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EditlaboralComponent,
    NewlaboralComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewproyectosComponent,
    EditproyectosComponent,
    EditpersonaComponent,
    NewskillComponent,
    EditskillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
