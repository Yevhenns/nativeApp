import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import User from "../../Components/User";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const logOut = () => {
    navigation.navigate("register");
  };

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("../../assets/PhotoBG.jpg")}
        style={styles.image}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.logoutBtn} onPress={logOut}>
            <MaterialIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
          <User />
          <Text style={styles.heading}>Борис Джонсонюк</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 22,
    paddingBottom: 32,
    marginTop: "auto",
  },
  logoutBtn: {
    marginLeft: "auto",
    marginBottom: 45,
  },
  heading: {
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 30,
  },
  image: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
