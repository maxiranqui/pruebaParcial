import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { ConsultarPersonaComponent } from './consultar-persona/consultar-persona.component';


const routes: Routes = [
  {path: 'crear-persona-component', component: CrearPersonaComponent},
  {path: 'consultar-persona-component', component: ConsultarPersonaComponent},
  { path: '', redirectTo: 'consultar-persona-component', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
