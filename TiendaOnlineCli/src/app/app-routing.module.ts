import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllArticulosComponent } from './components/all-articulos/all-articulos.component';
import { ArticuloFormComponent } from './components/articulo-form/articulo-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
{ path: 'index', component: AllArticulosComponent},
{ path: 'articuloForm', component: ArticuloFormComponent},
{ path: 'register', component: UserFormComponent},
{ path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
