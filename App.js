import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import SVGadd from "./Components/SVGadd";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("./assets/PhotoBG.jpg")}
        style={styles.image}
      >
        <View style={styles.container}>
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
                style={{ width: 120, height: 120, backgroundColor: "#F6F6F6" }}
                source={{ uri: "https://placehold.co/120x120" }}
              />
            </View>
            <View style={{ position: "absolute", right: -15, bottom: 10 }}>
              <SVGadd />
            </View>
          </View>
          <Text style={styles.heading}>Реєстрація</Text>
          <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Логін" />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.navText}>Вже є акаунт? Увійти</Text>
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
    paddingBottom: 80,
    paddingTop: 90,
    marginTop: "auto",
  },
  form: {
    gap: 16,
    alignItems: "center",
    marginBottom: 45,
  },
  heading: {
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
  input: {
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    width: "100%",
    borderRadius: 8,
    fontSize: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  navText: {
    textAlign: "center",
    fontSize: 16,
    color: "#1B4371",
  },
});
