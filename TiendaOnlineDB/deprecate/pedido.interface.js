import { LineaPedido } from './lineaPedido.interface';
import { User } from './user.interface';

export class Pedido{
  constructor(user,lineasPedidos,total,fecha,id=0){
    this.user = user
    this.lineasPedidos = lineasPedidos
    this.total=total
    this.fecha = fecha
    this.id = id
  }
  

  }
