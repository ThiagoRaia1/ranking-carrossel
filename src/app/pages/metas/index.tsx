import { StyleSheet, Text, View } from "react-native";
import { META_DIARIA, META_MENSAL, META_SEMANAL } from "../ranking";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import ProgressBar from "@/_components/ProgressBar";

const ICON_SIZE: number = 60;
const ICON_COLOR: string = "green";

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
    },
  });

  return (
    <View style={styles.mainContainer}>
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
          <ProgressBar meta={META_MENSAL} realizado={99687.5} />
        </View>
      </View>

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
          <ProgressBar meta={META_SEMANAL} realizado={26290.63} />
        </View>
      </View>

      <View style={styles.metaContainer}>
        <AntDesign
          name="clock-circle"
          size={ICON_SIZE}
          color={ICON_COLOR}
          style={styles.icon}
        />
        <View style={styles.metaTitle}>
          <Text style={styles.metaTitleText}>META DIÁRIA: </Text>
          <Text style={styles.metaTitleText}>7250 Kg</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <ProgressBar meta={META_DIARIA} realizado={4740} />
        </View>
      </View>
    </View>
  );
}
