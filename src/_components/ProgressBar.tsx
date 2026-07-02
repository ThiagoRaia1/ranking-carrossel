import { StyleSheet, Text, View } from "react-native";

interface ProgressBarProps {
  meta: number;
  realizado: number;
  height?: number;
}

export default function ProgressBar({
  meta,
  realizado,
  height = 36,
}: ProgressBarProps) {
  const porcentagem = Math.min((realizado / meta) * 100, 100);

  return (
    <View
      style={[
        styles.container,
        {
          height,
        },
      ]}
    >
      <View
        style={[
          styles.progress,
          {
            width: `${porcentagem}%`,
          },
        ]}
      >
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{porcentagem.toFixed(1)}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#D9D9D9",
    overflow: "hidden",
    justifyContent: "center",
    borderRadius: 4,
  },

  progress: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#0A8F3D",
  },

  labelContainer: {
    ...StyleSheet.absoluteFill,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 12,
  },

  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});
