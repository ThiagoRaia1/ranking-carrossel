import { Slot } from "expo-router";
import Topbar from "@/_components/Topbar";
import { useState } from "react";
import { Pressable, Text, Image, View } from "react-native";

export default function Layout() {
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  return (
    <View style={{flex: 1, width: 1200, alignSelf: "center" }}>
      {isTopbarVisible ? (
        <Topbar onClose={() => setIsTopbarVisible(false)} />
      ) : (
        <Pressable
          onPress={() => setIsTopbarVisible(true)}
          style={{
            position: "absolute",
            top: 8,
            right: -2,
            zIndex: 999,
            padding: 10,
          }}
        >
          <Text selectable={false}>V</Text>
        </Pressable>
      )}

      <Image
        source={require("@/assets/LogoEletubos.png")}
        style={{
          width: 320,
          height: 100,
        }}
        resizeMode="cover"
      />
      <Slot />
    </View>
  );
}
