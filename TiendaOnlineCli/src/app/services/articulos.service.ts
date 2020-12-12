import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articulo } from '../models/interfaces/articulo.interface'


const Base_Url = 'http://localhost:9000/articulos';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  allArticulos():Observable<[Articulo]>{
    return this.http.get<[Articulo]>(
      Base_Url,
      httpOptions
    );

  }

  nuevoArticulo(articulo:any):Observable<any>{
    return this.http.post(
      Base_Url,
      articulo,
    );
  }
}
