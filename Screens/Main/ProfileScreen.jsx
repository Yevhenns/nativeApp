import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>ProfileScreen</Text>
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

export default ProfileScreen;
