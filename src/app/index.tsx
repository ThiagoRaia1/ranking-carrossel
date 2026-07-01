import { Animated, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import Pedidos from "./pages/pedidos";
import Ranking from "./pages/ranking";
import Vendedores from "./pages/vendedores";

const pages = [
  <Ranking key="ranking" />,
  <Pedidos key="pedidos" />,
  <Vendedores key="vendedores" />,
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [width, setWidth] = useState(0);

  const translateX = useRef(new Animated.Value(0)).current;

  const nextPage = (currentPage + 1) % pages.length;

  useEffect(() => {
    if (width === 0) return;

    const interval = setInterval(() => {
      Animated.timing(translateX, {
        toValue: -width,
        duration: 700,
        useNativeDriver: true,
      }).start(() => {
        setCurrentPage((p) => (p + 1) % pages.length);
        translateX.setValue(0);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [currentPage, width]);

  return (
    <View
      style={{
        flex: 1,
        overflow: "hidden",
      }}
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;

        if (newWidth !== width) {
          setWidth(newWidth);
        }
      }}
    >
      {width > 0 && (
        <Animated.View
          style={{
            width: width * 2,
            height: "100%",
            flexDirection: "row",
            transform: [{ translateX }],
          }}
        >
          <View
            style={{
              width,
              height: "100%",
            }}
          >
            {pages[currentPage]}
          </View>

          <View
            style={{
              width,
              height: "100%",
            }}
          >
            {pages[nextPage]}
          </View>
        </Animated.View>
      )}
    </View>
  );
}