import { Categoria } from './categoria.interface';
import { Comentario } from './comentario.interface';

export class Articulo {
  id:number
  nombre: string
  precio: number
  foto: string
  descripcion: string
  meGusta: number
  comentarios: Comentario[]
  categoria: string
  enStock: number
  rebajado: boolean
  retirado: boolean
  constructor(id?:number,nombre?: string, precio?: number, foto?: string,
    descripcion?: string, meGusta?: number, comentarios?: Comentario[],
    categoria?:string,enStock?: number, rebajado?: boolean, retirado?: boolean){
      this.id = id
      this.nombre = nombre
      this.precio = precio
      this.foto = foto
      this.descripcion = descripcion
      this.meGusta = meGusta
      this.comentarios = comentarios
      this.categoria = categoria
      this.enStock = enStock
      this.rebajado = rebajado
      this.retirado = retirado
    }
}

