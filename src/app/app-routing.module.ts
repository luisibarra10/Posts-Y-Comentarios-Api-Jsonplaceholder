import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescripcionUsuarioComponent } from './components/descripcion-usuario/descripcion-usuario.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/posts', pathMatch: 'full' },
   { path: 'posts', component: ListadoUsuariosComponent },
   { path: 'posts/:id', component: DescripcionUsuarioComponent },
   { path: 'posts/id/error', component: NotFoundComponent },
   { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
