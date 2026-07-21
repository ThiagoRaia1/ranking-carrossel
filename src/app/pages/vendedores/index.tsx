import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { vendedores, vendedorIconSize } from "../ranking";
import { createVendedor, getVendedores } from "../../../../services/vendedores";
import AdicionarVendedorModal from "./form";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Vendedor } from "../../../../interfaces/vendedor";

export const COLUNA_VENDEDOR = 800;
export const COLUNA_ACOES = 400;

export default function Vendedores() {
  const [modalVisible, setModalVisible] = useState(false);
  const [vendedores, setVendedores] = useState<Vendedor[]>()

  const styles = StyleSheet.create({
    button: {
      paddingVertical: 6,
      paddingHorizontal: 8,
      borderRadius: 8,
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
          Vendedor
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            backgroundColor: "white",
            borderRadius: 400,
            borderColor: "black",
            borderWidth: 1,
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

  useEffect(() => {
    const getData = async () => {
      const resultado = await getVendedores()
      setVendedores(resultado)
    }

    getData()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
      }}
    >
      <FlatList
        data={vendedores}
        keyExtractor={(item) => item.id.toString()}
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
        renderItem={({ item: vendedor, index }) => (
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
                source={vendedor.fotoPath}
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
                {vendedor.nome}
              </Text>
            </View>

            {/* Ações */}
            <View
              style={{
                width: COLUNA_ACOES,
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                borderLeftWidth: 1,
                borderColor: "#ccc",
              }}
            >
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "green" }]}
              >
                <Feather name="edit" size={60} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    backgroundColor: vendedor.ativo ? "red" : "gray",
                  },
                ]}
              >
                {vendedor.ativo ? (
                  <Feather name="trash" size={60} color="white" />
                ) : (
                  <MaterialCommunityIcons
                    name="account-reactivate-outline"
                    size={60}
                    color="white"
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <AdicionarVendedorModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={async (nome) => {
          const resultado = await createVendedor(nome);
          alert(resultado.id)
          router.push("/pages/vendedores")
        }}
      />
    </View>
  );
}
