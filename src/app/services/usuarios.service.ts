import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'https://jsonplaceholder.typicode.com/posts/';
  urlComentarios = 'https://jsonplaceholder.typicode.com/comments?postId=';

  constructor(private http: HttpClient ) { }

  getUsuarios(): Observable<any>{
    return this.http.get(this.url);
  }

  getUsuario(id: number): Observable<any>{
    return this.http.get(this.url + id)
    
  }

  getComentarios(id:number): Observable<any>{
    
    return this.http.get(this.urlComentarios + id)
  }
  
}
