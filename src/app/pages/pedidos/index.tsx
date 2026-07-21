import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { vendedores, vendedorIconSize } from "../ranking";
import { Entypo, Feather } from "@expo/vector-icons";
import Pedido from "../../../../interfaces/pedido";
import AdicionarPedidoModal from "./form";
import { useState } from "react";

const pedidos: Pedido[] = [
  {
    vendedor: vendedores[4],
    valor: 0.01,
    peso: 0.01,
    numeroPedido: 1,
  },
  {
    vendedor: vendedores[1],
    valor: 0.03,
    peso: 0.03,
    numeroPedido: 2,
  },
  {
    vendedor: vendedores[0],
    valor: 4985.49,
    peso: 316.1,
    numeroPedido: 5377,
  },
  {
    vendedor: vendedores[0],
    valor: 4869.07,
    peso: 235.2,
    numeroPedido: 5378,
  },
  {
    vendedor: vendedores[3],
    valor: 7249.2,
    peso: 457.2,
    numeroPedido: 5379,
  },
  {
    vendedor: vendedores[3],
    valor: 2029.31,
    peso: 123.07,
    numeroPedido: 5380,
  },
  {
    vendedor: vendedores[3],
    valor: 8628.48,
    peso: 585.04,
    numeroPedido: 5381,
  },
  {
    vendedor: vendedores[2],
    valor: 116.11,
    peso: 6.26,
    numeroPedido: 5382,
  },
  {
    vendedor: vendedores[0],
    valor: 3580.06,
    peso: 214.04,
    numeroPedido: 5383,
  },
  {
    vendedor: vendedores[3],
    valor: 3969.7,
    peso: 263.34,
    numeroPedido: 5384,
  },
  {
    vendedor: vendedores[0],
    valor: 5623.0,
    peso: 313.0,
    numeroPedido: 5385,
  },
  {
    vendedor: vendedores[2],
    valor: 5582.67,
    peso: 326.1,
    numeroPedido: 5386,
  },
];

const ACTION_BUTTON_SIZE = 30;
const COLUNA_VENDEDOR = 800;
const COLUNA_ACOES = 400;

export default function Pedidos() {
  const [modalVisible, setModalVisible] = useState(false);

  const styles = StyleSheet.create({
    button: {
      paddingVertical: 6,
      paddingHorizontal: 8,
      borderRadius: 8,
    },
    pedidoInfoText: {
      fontSize: 20,
      textAlign: "center",
    },
  });

  const renderHeader = () => (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#f2f2f2",
        height: 70,
        borderBottomWidth: 1,
        borderColor: "#ccc",
      }}
    >
      <View
        style={{
          width: COLUNA_VENDEDOR,
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "center" }}>
          Pedidos
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            backgroundColor: "white",
            borderRadius: 400,
            paddingHorizontal: 2,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Entypo name="circle-with-plus" size={40} color="green" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: COLUNA_ACOES,
          justifyContent: "center",
          alignItems: "center",
          borderLeftWidth: 1,
          borderColor: "#ccc",
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>Ações</Text>
      </View>
    </View>
  );

  return (
    <>
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.numeroPedido.toString()}
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        style={{
          width: "100%",
          maxWidth: 1200,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          marginBottom: 20,
        }}
        renderItem={({ item: pedido }) => (
          <View
            style={{
              flexDirection: "row",
              height: 140,
              borderBottomWidth: 1,
              borderColor: "#ccc",
            }}
          >
            {/* Foto + Nome */}
            <View
              style={{
                width: COLUNA_VENDEDOR,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 20,
                gap: 20,
                backgroundColor: "#C0E6F5",
              }}
            >
              <Image
                source={pedido.vendedor.fotoPath}
                style={{
                  width: vendedorIconSize,
                  height: vendedorIconSize,
                  borderRadius: 400,
                  borderWidth: 1,
                  backgroundColor: "white",
                }}
                resizeMode="contain"
              />

              <Text
                style={{
                  fontSize: 60,
                  fontWeight: "600",
                }}
              >
                {pedido.vendedor.nome}
              </Text>
            </View>

            {/* Ações */}
            <View
              style={{
                flexDirection: "row",
                width: COLUNA_ACOES,
                justifyContent: "center",
                alignItems: "center",
                borderLeftWidth: 1,
                borderColor: "#ccc",
                paddingVertical: 12,
                paddingHorizontal: 20,
                gap: 12,
              }}
            >
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={[styles.pedidoInfoText, { fontWeight: "bold" }]}>
                  Pedido #{pedido.numeroPedido}
                </Text>
                <Text style={styles.pedidoInfoText}>
                  Peso: {pedido.peso.toFixed(2)} Kg
                  <br />
                  Valor:{" "}
                  {pedido.valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>
              </View>
              <View style={{ gap: 4 }}>
                <TouchableOpacity
                  style={[styles.button, { backgroundColor: "green" }]}
                >
                  <Feather
                    name="edit"
                    size={ACTION_BUTTON_SIZE}
                    color="white"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      backgroundColor: "red",
                    },
                  ]}
                >
                  <Feather
                    name="trash"
                    size={ACTION_BUTTON_SIZE}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <AdicionarPedidoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={(pedido) => {
          console.log(pedido);
          // chamar createPedido(pedido)
        }}
      />
    </>
  );
}
