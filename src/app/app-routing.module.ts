import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditlaboralComponent } from './componentes/laboral/editlaboral.component';
import { NewlaboralComponent } from './componentes/laboral/newlaboral.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { NewproyectosComponent } from './componentes/proyectos/newproyectos.component';
import { EditproyectosComponent } from './componentes/proyectos/editproyectos.component';
import { EditpersonaComponent } from './componentes/editpersona/editpersona.component';
import { NewskillComponent } from './componentes/skills/newskill.component';
import { EditskillComponent } from './componentes/skills/editskill.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'login', component : LoginComponent},
  { path: 'nuevaexp', component: NewlaboralComponent},
  { path: 'editexp/:id', component: EditlaboralComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'nuevoproyecto', component: NewproyectosComponent},
  { path: 'editproyecto/:id', component: EditproyectosComponent},
  { path: 'update/:id', component: EditpersonaComponent},
  { path: 'nuevaskill', component: NewskillComponent},
  { path: 'editskill/:id', component: EditskillComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
