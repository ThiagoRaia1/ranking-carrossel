import { Text, View, Image, StyleSheet } from "react-native";
import Vendedor from "../../../../interfaces/vendedor";

export const vendedores: Vendedor[] = [
  {
    id: 1,
    nome: "Andreza",
    ativo: true,
    fotoPath: require("@/assets/Andreza.png"),
  },
  {
    id: 2,
    nome: "Celso",
    ativo: true,
    fotoPath: require("@/assets/Celso.png"),
  },
  {
    id: 3,
    nome: "Elisângela",
    ativo: true,
    fotoPath: require("@/assets/Elisângela.png"),
  },
  {
    id: 4,
    nome: "Lissandra",
    ativo: true,
    fotoPath: require("@/assets/Lissandra.png"),
  },
  {
    id: 5,
    nome: "Macikelle",
    ativo: true,
    fotoPath: require("@/assets/Macikelle.png"),
  },
  // {
  //   id: 6,
  //   nome: "Macikelle",
  //   ativo: true,
  //   fotoPath: require("@/assets/Macikelle.png"),
  // },
  // {
  //   id: 7,
  //   nome: "Macikelle",
  //   ativo: true,
  //   fotoPath: require("@/assets/Macikelle.png"),
  // },
  // {
  //   id: 8,
  //   nome: "Macikelle",
  //   ativo: true,
  //   fotoPath: require("@/assets/Macikelle.png"),
  // },
  // {
  //   id: 9,
  //   nome: "Macikelle",
  //   ativo: true,
  //   fotoPath: require("@/assets/Macikelle.png"),
  // },
  // {
  //   id: 10,
  //   nome: "Macikelle",
  //   ativo: true,
  //   fotoPath: require("@/assets/Macikelle.png"),
  // },
];

export const vendedorIconSize: number = 120;

export const META_MENSAL = 145000;
export const META_SEMANAL = META_MENSAL / 4;
export const META_DIARIA = META_SEMANAL / 5;
export const TOTAL_VENDIDO = 103071;

export default function Ranking() {
  const kgColumn = [100, 200, 300, 400, 500];

  const styles = StyleSheet.create({
    tableHeader: {},
    vendedorNameView: {
      height: "100%",
      width: 400,
      justifyContent: "center",
    },
    vendedorNameText: {
      fontSize: 60,
    },
    kgColumnView: {
      backgroundColor: "white",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      borderLeftWidth: 1,
    },
  });

  function getRemainingBusinessDays() {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth();

    // Último dia do mês
    const lastDay = new Date(year, month + 1, 0);

    let businessDays = 0;

    // Começa hoje
    const current = new Date(today);
    current.setDate(current.getDate());

    while (current <= lastDay) {
      const day = current.getDay(); // 0 = domingo, 6 = sábado

      if (day !== 0 && day !== 6) {
        businessDays++;
      }

      current.setDate(current.getDate() + 1);
    }

    return businessDays;
  }

  const diasUteisRestantes = getRemainingBusinessDays();

  return (
    <View
      style={{
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          META MENSAL:{" "}
          <Text style={{ color: "#0A8F3D" }}>{META_MENSAL} kg</Text>
        </Text>

        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          DIAS ÚTEIS RESTANTES:{" "}
          <Text style={{ color: "#0A8F3D" }}>{diasUteisRestantes}</Text>
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          TOTAL VENDIDO:{" "}
          <Text style={{ color: "#0A8F3D" }}>{TOTAL_VENDIDO} kg</Text>
        </Text>

        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          FALTA VENDER:{" "}
          <Text style={{ color: "red" }}>{META_MENSAL - TOTAL_VENDIDO} kg</Text>
        </Text>
      </View>

      <View
        style={{
          alignSelf: "center",
          maxWidth: 1200,
          width: "100%",
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        {/* Cabeçalho */}
        {/* <View
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
              flex: 4,
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>Vendedor</Text>
          </View>

          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
              borderLeftWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>
              Peso vendido
            </Text>
          </View>
        </View> */}

        {/* Linhas */}
        {vendedores.map((vendedor, index) => (
          <View
            key={vendedor.id}
            style={{
              flexDirection: "row",
              height: 140,
              borderBottomWidth: index === vendedores.length - 1 ? 0 : 1,
              borderColor: "#ccc",
              maxWidth: 1200,
            }}
          >
            {/* Foto + Nome */}
            <View
              style={{
                flex: 4,
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
                  marginRight: 20,
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

            {/* Peso vendido */}
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
                borderLeftWidth: 1,
                borderColor: "#ccc",
              }}
            >
              <Text
                style={{
                  fontSize: 60,
                  fontWeight: "bold",
                }}
              >
                {kgColumn[index]} kg
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
