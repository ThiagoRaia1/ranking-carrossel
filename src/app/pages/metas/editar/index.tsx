import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getMetas, updateMetas } from "../../../../../services/metas";

function parseKg(valor: string): number {
  return Number(valor.replace(/\./g, "").replace(",", "."));
}

export default function EditarMetas() {
  const [metaMensal, setMetaMensal] = useState("");
  const [metaSemanal, setMetaSemanal] = useState("");
  const [metaDiaria, setMetaDiaria] = useState("");

  async function salvarMetas() {
    try {
      await updateMetas({
        mensal: parseKg(metaMensal),
        semanal: parseKg(metaSemanal),
        diaria: parseKg(metaDiaria),
      });

      alert("Metas atualizadas com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar as metas.");
    }
  }

  useEffect(() => {
    async function carregarMetas() {
      try {
        const metas = await getMetas();
        console.log(metas);

        setMetaMensal(metas.mensal.toString());
        setMetaSemanal(metas.semanal.toString());
        setMetaDiaria(metas.diaria.toString());
      } catch (error: any) {}
    }

    carregarMetas();
  }, []);

  const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      gap: 80,
    },
    labelInputContainer: {
      gap: 4,
    },
    label: {
      fontSize: 18,
      fontWeight: "bold",
    },
    input: {
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 4,
      height: 40,
      fontSize: 18,
    },
    inputDescriptionContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
  });

  return (
    <View style={styles.inputContainer}>
      <View style={styles.labelInputContainer}>
        <Text style={styles.label}>META MENSAL</Text>
        <View style={styles.inputDescriptionContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={metaMensal}
            onChangeText={(text) => {
              const value = Number(text.replace(/\D/g, ""));
              if (!value) {
                setMetaMensal("0");
                return;
              }
              setMetaMensal(value.toString());
            }}
          />
          <Text style={styles.label}>KG</Text>
        </View>
      </View>

      <View style={styles.labelInputContainer}>
        <Text style={styles.label}>META SEMANAL</Text>
        <View style={styles.inputDescriptionContainer}>
          <TextInput
            style={styles.input}
            value={metaSemanal}
            onChangeText={(text) => {
              const value = Number(text.replace(/\D/g, ""));
              if (!value) {
                setMetaSemanal("0");
                return;
              }
              setMetaSemanal(value.toString());
            }}
          />
          <Text style={styles.label}>KG</Text>
        </View>
      </View>

      <View style={styles.labelInputContainer}>
        <Text style={styles.label}>META DIÁRIA</Text>
        <View style={styles.inputDescriptionContainer}>
          <TextInput
            style={styles.input}
            value={metaDiaria}
            onChangeText={(text) => {
              const value = Number(text.replace(/\D/g, ""));
              if (!value) {
                setMetaDiaria("0");
                return;
              }
              setMetaDiaria(value.toString());
            }}
          />
          <Text style={styles.label}>KG</Text>
        </View>
      </View>

      <TouchableOpacity onPress={salvarMetas}>
        <Text>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}
