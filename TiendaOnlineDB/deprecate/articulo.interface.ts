import { Categoria } from './categoria.interface';
import { Comentario } from '../src/models/comentario.interface';

export interface Articulo{
  id:string
  nombre:string
  precio:number
  foto:string
  descripcion:string
  meGusta:number
  comentarios:Comentario[]
  categoria:Categoria
  enStock:number
  rebajado:boolean
  retirado:boolean
}

