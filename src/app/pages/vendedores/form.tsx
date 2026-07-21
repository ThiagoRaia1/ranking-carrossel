import { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSave: (nome: string) => void;
}

export default function AdicionarVendedorModal({
  visible,
  onClose,
  onSave,
}: Props) {
  const [nome, setNome] = useState("");

  function salvar() {
    if (!nome.trim()) {
      alert("Informe o nome do vendedor.");
      return;
    }

    onSave(nome.trim());

    setNome("");
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Adicionar vendedor</Text>

          <Text style={styles.label}>Nome</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o nome do vendedor"
            value={nome}
            onChangeText={setNome}
            autoFocus
          />

          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={salvar}
            >
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: 450,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 6,
    height: 50,
    paddingHorizontal: 12,
    fontSize: 18,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    marginTop: 8,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  },
  cancelButton: {
    backgroundColor: "#8A8A8A",
  },
  confirmButton: {
    backgroundColor: "#0A8F3D",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});