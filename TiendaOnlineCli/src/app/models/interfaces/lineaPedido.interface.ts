import { Articulo } from './articulo.interface';

export interface LineaPedido{
  id:string
  idPedido:string
  articulo:Articulo
  cantidad:number
  total:number

}
