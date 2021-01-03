import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import * as moment from 'moment';

@Component({
  selector: 'app-descripcion-usuario',
  templateUrl: './descripcion-usuario.component.html',
  styleUrls: ['./descripcion-usuario.component.css']
})
export class DescripcionUsuarioComponent implements OnInit {
 
  seleccionado: number;
  titulo = '';
  detalle = '';
  date =  '';
      


  constructor(private _usuariosServices: UsuariosService, private route: ActivatedRoute
    ,private router: Router) { 
    this.seleccionado = +route.snapshot.paramMap.get('id')!;
    this.obtenerUsuario(this.seleccionado);
  }

  ngOnInit(): void {
  }

  obtenerUsuario(id:number){
    this._usuariosServices.getUsuario(id).subscribe(data =>{
      this.titulo = data.title;
      this.detalle = data.body;
    }, error =>{
      this.router.navigate(['posts/id/error']);
    })
  }

 
  recibirFecha(mensaje: any){
    this.date = mensaje;
    this.date = moment().format('LLLL');
} 
  
}
