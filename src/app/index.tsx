import { Text, View, Image, StyleSheet } from "react-native";
import Vendedor from "../../interfaces/vendedor";

export default function Home() {
  const vendedorIconSize: number = 120;
  const vendedores: Vendedor[] = [
    { id: 1, nome: "Andreza", fotoPath: require("@/assets/Andreza.png") },
    { id: 2, nome: "Celso", fotoPath: require("@/assets/Celso.png") },
    { id: 3, nome: "Elisângela", fotoPath: require("@/assets/Elisângela.png") },
    { id: 4, nome: "Lissandra", fotoPath: require("@/assets/Lissandra.png") },
    { id: 5, nome: "Macikelle", fotoPath: require("@/assets/Macikelle.png") },
  ];

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
    current.setDate(current.getDate() - 1);

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
    <>
      <Image
        source={require("@/assets/LogoEletubos.png")}
        style={{
          width: 500,
          height: 100,
          alignSelf: "center",
          marginVertical: 20,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          width: 1200,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          META MENSAL: <Text style={{ color: "#0A8F3D" }}>145000 kg</Text>
        </Text>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          TOTAL VENDIDO: <Text style={{ color: "#0A8F3D" }}>103071 kg</Text>
        </Text>
      </View>

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
    </>
  );
}
