import { router, usePathname } from "expo-router";
import { View, Text, TouchableOpacity, Pressable } from "react-native";

const pages = [
  { path: "/", label: "Ranking" },
  { path: "/pages/pedidos", label: "Pedidos" },
  { path: "/pages/vendedores", label: "Vendedores" },
];

interface TopbarProps {
  onClose: () => void;
}

export default function Topbar({ onClose }: TopbarProps) {
  const pathname = usePathname();
  return (
    <View
      style={{
        position: "absolute",
        zIndex: 9,
        height: 64,
        width: "100%",
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        justifyContent: "center",
      }}
    >
      <Pressable style={{ position: "absolute", right: 20, zIndex: 10 }} onPress={onClose}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }} selectable={false}>
          ✕
        </Text>
      </Pressable>
      <View
        style={{
          width: "100%",
          maxWidth: 1350,
          justifyContent: "space-evenly",
          flexDirection: "row",
          alignSelf: "center",
        }}
      >
        {pages.map((page) => {
          return (
            <TouchableOpacity
              key={page.label}
              onPress={() => router.push(page.path)}
            >
              <Text
                style={[
                  pathname === `${page.path}` && {
                    color: "blue",
                    textDecorationLine: "underline",
                  },
                  { fontSize: 18 },
                ]}
              >
                {page.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
