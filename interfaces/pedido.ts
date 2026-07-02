import Vendedor from "./vendedor";

export default interface Pedido {
  id?: number;
  valor: number;
  peso: number;
  numeroPedido: number;
  vendedor: Vendedor;
}
