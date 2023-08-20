import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MapScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MapScreen;
