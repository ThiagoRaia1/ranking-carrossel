import ProgressBar from "@/_components/ProgressBar";
import { StyleSheet, Text, View, Image } from "react-native";
import { META_MENSAL, TOTAL_VENDIDO } from "../ranking";

const IMAGE_SIZE: number = 200;

const progresso = TOTAL_VENDIDO / META_MENSAL;

const getImageStyle = (indice: number) => {
  let ativo = false;

  if (progresso >= 1) {
    ativo = indice === 2;
  } else if (progresso >= 0.5) {
    ativo = indice === 1;
  } else {
    ativo = indice === 0;
  }

  return {
    width: ativo ? 240 : 180,
    height: ativo ? 240 : 180,
    resizeMode: "contain" as const,
  };
};

export default function Progresso() {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      gap: 24,
      marginBottom: 120,
    },
    frasePrincipal: {
      fontSize: 40,
      textAlign: "center",
      fontStyle: "italic",
    },
    metaSubtitleContainer: {
      alignItems: "center",
    },
    metaSubtitle: {
      fontWeight: "bold",
      fontSize: 24,
    },
    metaKg: {
      fontSize: 24,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.frasePrincipal}>
        "O vendedor de sucesso não desiste na primeira tentativa -<br />
        ele transforma persistência em resultado."
      </Text>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          gap: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("@/assets/Mascote_Triste.png")}
              style={getImageStyle(0)}
            />
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("@/assets/Mascote_Pensativo.png")}
              style={getImageStyle(1)}
            />
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <Image
              source={require("@/assets/Mascote_Feliz.png")}
              style={getImageStyle(2)}
            />
          </View>
        </View>
        <ProgressBar meta={META_MENSAL} realizado={TOTAL_VENDIDO} />
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.metaSubtitleContainer}>
            <Text style={styles.metaKg}>0 Kg</Text>
            <Text style={styles.metaSubtitle}>Início da meta</Text>
          </View>

          <View style={styles.metaSubtitleContainer}>
            <Text style={styles.metaKg}>{META_MENSAL / 2} Kg</Text>
            <Text style={styles.metaSubtitle}>Meta em andamento</Text>
          </View>

          <View style={styles.metaSubtitleContainer}>
            <Text style={styles.metaKg}>{META_MENSAL} Kg</Text>
            <Text style={styles.metaSubtitle}>Meta batida</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
