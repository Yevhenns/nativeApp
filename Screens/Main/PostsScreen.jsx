import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>PostsScreen</Text>
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

export default PostsScreen;
