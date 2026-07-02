import ProgressBar from "@/_components/ProgressBar";
import { StyleSheet, Text, View, Image } from "react-native";
import { META_MENSAL, vendedores } from "../ranking";

const IMAGE_SIZE: number = 200;

export default function Progresso() {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      gap: 24,
      marginBottom: 120
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
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("@/assets/Mascote_Triste.png")}
            style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
          />
          <Image
            source={require("@/assets/Mascote_Pensativo.png")}
            style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
          />
          <Image
            source={require("@/assets/Mascote_Feliz.png")}
            style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
          />
        </View>
        <ProgressBar meta={META_MENSAL} realizado={85700} />
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
