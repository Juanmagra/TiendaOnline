import { LineaPedido } from './lineaPedido.interface';
import { User } from './user.interface';

export interface Pedido{
  id:string
  user:User
  lineasPedidos:LineaPedido[]
  total:number
  fecha:Date
  }
