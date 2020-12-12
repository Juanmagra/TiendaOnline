import { User } from './user.interface';

export interface Comentario {
  id:string
  usuario:User
  fecha:Date
  mensaje:string
  meGusta:number
}
