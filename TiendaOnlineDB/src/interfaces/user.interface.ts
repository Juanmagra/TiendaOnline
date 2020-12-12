import { Pedido } from './pedido.interface';

export interface User {
  id:string
  nombre:string
  apellidos:string
  pedidos:Pedido[]
  esAdmin:boolean
}
