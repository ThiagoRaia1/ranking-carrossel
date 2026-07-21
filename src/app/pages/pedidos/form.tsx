import { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { getVendedores } from "../../../../services/vendedores";
import { Vendedor } from "../../../../interfaces/vendedor";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSave: (pedido: {
    numero: number;
    data: string;
    pesoKg: number;
    valor: number;
    vendedorId: number;
  }) => void;
}

export default function AdicionarPedidoModal({
  visible,
  onClose,
  onSave,
}: Props) {
  const [numero, setNumero] = useState("");
  const [data, setData] = useState("");
  const [peso, setPeso] = useState("");
  const [valor, setValor] = useState("");
  const [vendedores, setVendedores] = useState<Vendedor[]>();
  const [vendedorId, setVendedorId] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const resultado = await getVendedores();
      setVendedores(resultado);
    };

    getData();
  }, []);

  function salvar() {
    // onSave({
    //   numero: Number(numero),
    //   data,
    //   pesoKg: Number(peso),
    //   valor: Number(valor),
    //   vendedorId,
    // });

    setNumero("");
    setData("");
    setPeso("");
    setValor("");

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
          <Text style={styles.title}>Novo Pedido</Text>

          <Text>Número do Pedido</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={numero}
            onChangeText={setNumero}
          />

          <Text>Data</Text>
          <TextInput
            style={styles.input}
            placeholder="20/07/2026"
            value={data}
            onChangeText={setData}
          />

          <Text>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            keyboardType="decimal-pad"
            value={peso}
            onChangeText={setPeso}
          />

          <Text>Valor (R$)</Text>
          <TextInput
            style={styles.input}
            keyboardType="decimal-pad"
            value={valor}
            onChangeText={setValor}
          />

          <Text>Vendedor</Text>

          <Picker
            selectedValue={vendedorId}
            onValueChange={(value) => setVendedorId(value)}
          >
            {vendedores &&
              vendedores.map((vendedor) => (
                <Picker.Item
                  key={vendedor.id}
                  label={vendedor.nome}
                  value={vendedor.id}
                />
              ))}
          </Picker>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#999" }]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#0A8F3D" }]}
              onPress={salvar}
            >
              <Text style={styles.buttonText}>Salvar</Text>
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
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: 500,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    height: 45,
    paddingHorizontal: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    marginTop: 16,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
