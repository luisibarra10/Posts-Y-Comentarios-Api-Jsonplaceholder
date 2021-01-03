import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private _usuariosServices: UsuariosService,private router: Router) {
    this.obtenerUsuarios();
   }

  ngOnInit(): void {
    
  }

  obtenerUsuarios(){
    this._usuariosServices.getUsuarios().subscribe(data =>{
     this.usuarios = data;
    })
  }

  obtenerUsuario(id:number){
    this._usuariosServices.getUsuario(id).subscribe(data =>{
      
    this.router.navigate(['posts', id]);
    })
  }
}
