import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

export default function UserInfo() {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#F6F6F6",
          }}
          source={{ uri: "https://placehold.co/60x60" }}
        />
      </View>
      <View>
        <Text>Борис Джонсонюк</Text>
        <Text>@mail.com</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  imageWrapper: {
    borderRadius: 16,
    overflow: "hidden",
  },
});
