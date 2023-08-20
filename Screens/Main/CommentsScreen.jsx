import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CommentsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>CommentsScreen</Text>
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

export default CommentsScreen;
