import { User } from './users';

export interface Comentario {
  id:string
  usuario:User
  fecha:Date
  mensaje:string
  meGusta:number
}
