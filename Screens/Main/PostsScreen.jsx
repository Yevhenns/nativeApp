import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import { MaterialIcons } from "@expo/vector-icons";
import UserInfo from "../../Components/UserInfo";

export default function PostsScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.heading}>Публікації</Text>
        <TouchableOpacity style={styles.logoutBtn}>
          <MaterialIcons name="logout" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.stick}></View>
      <View style={styles.main}>
        <UserInfo />
        <UserInfo />
        <UserInfo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 45,
  },
  header: {
    position: "relative",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  stick: {
    width: "100vw",
    height: 1,
    backgroundColor: "#BDBDBD",
  },
  logoutBtn: {
    position: "absolute",
    right: 16,
    top: 10,
  },
  heading: {
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
    fontSize: 17,
  },
  main: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    display: "flex",
    gap: 10,
  },
});
