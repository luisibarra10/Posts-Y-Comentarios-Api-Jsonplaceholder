import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListadoUsuariosComponent } from './components/listado-usuarios/listado-usuarios.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DescripcionUsuarioComponent } from './components/descripcion-usuario/descripcion-usuario.component';

import { HttpClientModule} from '@angular/common/http';
import { ComentariosComponent } from './components/comentarios/comentarios.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListadoUsuariosComponent,
    NotFoundComponent,
    DescripcionUsuarioComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
