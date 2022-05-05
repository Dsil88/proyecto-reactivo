import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes.
import { CrearPComponent } from './components/crear-p/crear-p.component';
import { MostrarpComponent } from './components/mostrarp/mostrarp.component';

const routes: Routes = [
  { path: '', component: MostrarpComponent },
  { path: 'crearp', component: CrearPComponent },
  { path: 'editarp/:id', component: CrearPComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
