import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import SVGadd from "./SVGadd";

export default function User() {
  return (
    <View
      style={{
        position: "absolute",
        left: "50%",
        top: -60,
        transform: [{ translateX: -45 }],
      }}
    >
      <View style={{ overflow: "hidden", borderRadius: 16 }}>
        <Image
          style={{
            width: 120,
            height: 120,
            backgroundColor: "#F6F6F6",
          }}
          source={{ uri: "https://placehold.co/120x120" }}
        />
      </View>
      <TouchableOpacity
        style={{ position: "absolute", right: -15, bottom: 10 }}
      >
        <SVGadd />
      </TouchableOpacity>
    </View>
  );
}
