
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Output() fechaEmitir: EventEmitter<any>;

    comentarios: any[] = [];
    nombre = '';
    email = '';
    seleccionado: number;
    fecha: Date;

  constructor(private _usuariosServices: UsuariosService, private route: ActivatedRoute) { 
    this.seleccionado = +route.snapshot.paramMap.get('id')!;
    this.obtenerComentarios(this.seleccionado);
     this.fecha = new Date();
     this.fechaEmitir = new EventEmitter();


  }

  ngOnInit(): void {
  }

    obtenerComentarios(id:number){
      this._usuariosServices.getComentarios(id).subscribe(data =>{
          this.comentarios = data;
          this.nombre = data.name;
          this.email = data.weight;
      })
    }

    emitirMensaje(){
      this.fechaEmitir.emit(this.fecha);
  }
}
