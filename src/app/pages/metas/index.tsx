import { StyleSheet, Text, View } from "react-native";
import {
  META_DIARIA,
  META_MENSAL,
  META_SEMANAL,
  TOTAL_VENDIDO,
} from "../ranking";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import ProgressBar from "@/_components/ProgressBar";

const ICON_SIZE: number = 60;
const ICON_COLOR: string = "green";
const KG_VENDIDO_SEMANA: number = 28290.63;
const KG_VENDIDO_DIA: number = 4740.0;

export default function Metas() {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: "space-evenly",
      paddingBottom: 60,
      paddingHorizontal: 4,
    },
    metaContainer: {
      flexDirection: "row",
      width: "100%",
      gap: 20,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 40,
      paddingHorizontal: 12,
      borderRadius: 8,
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
    },
    icon: {
      backgroundColor: "rgba(0, 255, 0, 0.1)",
      borderRadius: 400,
      padding: 18,
    },
    metaTitle: {
      flex: 1,
      gap: 4,
      alignItems: "center",
    },
    metaTitleText: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      color: "green",
    },
    progressBarContainer: {
      flex: 4,
      justifyContent: "center",
      marginTop: 20,
    },
    progressBarSubtitle: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    progressBarSubtitleText: {
      fontSize: 18,
      fontWeight: "bold",
    },
    totalVendidoContainer: { alignItems: "center" },
  });

  return (
    <View style={styles.mainContainer}>
      {/* META MENSAL */}
      <View style={styles.metaContainer}>
        <MaterialCommunityIcons
          name="target"
          size={ICON_SIZE}
          color={ICON_COLOR}
          style={styles.icon}
        />
        <View style={styles.metaTitle}>
          <Text style={styles.metaTitleText}>META MENSAL: </Text>
          <Text style={styles.metaTitleText}>{META_MENSAL} Kg</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <ProgressBar meta={META_MENSAL} realizado={TOTAL_VENDIDO} />
          <View style={styles.progressBarSubtitle}>
            <Text style={styles.progressBarSubtitleText}>0 Kg</Text>
            <View style={styles.totalVendidoContainer}>
              <Text style={styles.progressBarSubtitleText}>
                {TOTAL_VENDIDO.toFixed(1)} Kg
              </Text>
              <Text style={styles.progressBarSubtitleText}>Total Vendido</Text>
            </View>
            <Text style={styles.progressBarSubtitleText}>{META_MENSAL} Kg</Text>
          </View>
        </View>
      </View>

      {/* META SEMANAL */}
      <View style={styles.metaContainer}>
        <MaterialCommunityIcons
          name="calendar-blank-outline"
          size={ICON_SIZE}
          color={ICON_COLOR}
          style={styles.icon}
        />
        <View style={styles.metaTitle}>
          <Text style={styles.metaTitleText}>META SEMANAL:</Text>
          <Text style={styles.metaTitleText}>{META_SEMANAL} Kg</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar meta={META_SEMANAL} realizado={KG_VENDIDO_SEMANA} />
          <View style={styles.progressBarSubtitle}>
            <Text style={styles.progressBarSubtitleText}>0 Kg</Text>
            <View style={styles.totalVendidoContainer}>
              <Text style={styles.progressBarSubtitleText}>
                {KG_VENDIDO_SEMANA.toFixed(1)} Kg
              </Text>
              <Text style={styles.progressBarSubtitleText}>Total Vendido</Text>
            </View>
            <Text style={styles.progressBarSubtitleText}>
              {META_SEMANAL} Kg
            </Text>
          </View>
        </View>
      </View>

      {/* META DIARIA */}
      <View style={styles.metaContainer}>
        <AntDesign
          name="clock-circle"
          size={ICON_SIZE}
          color={ICON_COLOR}
          style={styles.icon}
        />
        <View style={styles.metaTitle}>
          <Text style={styles.metaTitleText}>META DIÁRIA: </Text>
          <Text style={styles.metaTitleText}>{META_DIARIA} Kg</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <ProgressBar meta={META_DIARIA} realizado={KG_VENDIDO_DIA} />
          <View style={styles.progressBarSubtitle}>
            <Text style={styles.progressBarSubtitleText}>0 Kg</Text>
            <View style={styles.totalVendidoContainer}>
              <Text style={styles.progressBarSubtitleText}>
                {KG_VENDIDO_DIA.toFixed(1)} Kg
              </Text>
              <Text style={styles.progressBarSubtitleText}>Total Vendido</Text>
            </View>
            <Text style={styles.progressBarSubtitleText}>{META_DIARIA} Kg</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
