import { ImageSourcePropType } from "react-native";
import Pedido from "./pedido";

export default interface Vendedor {
  id: number;
  nome: string;
  fotoPath: ImageSourcePropType;
  pedidos?: Pedido[];
}
