import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CreatePostsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>CreatePostsScreen</Text>
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

export default CreatePostsScreen;
