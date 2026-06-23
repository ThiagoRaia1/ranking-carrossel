import { Slot } from "expo-router";
import Topbar from "@/_components/Topbar";
import { useState } from "react";
import { Pressable, Text } from "react-native";

export default function Layout() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible ? (
        <Topbar onClose={() => setIsVisible(false)} />
      ) : (
        <Pressable
          onPress={() => setIsVisible(true)}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 999,
            padding: 10,
          }}
        >
          <Text selectable={false}>V</Text>
        </Pressable>
      )}

      <Slot />
    </>
  );
}
