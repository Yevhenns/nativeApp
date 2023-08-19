import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import SVGadd from "../Components/SVGadd";

export default function RegistrationScreen() {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("../assets/PhotoBG.jpg")}
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
            <TouchableOpacity
              style={{ position: "absolute", right: -15, bottom: 10 }}
            >
              <SVGadd />
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>Реєстрація</Text>
          <View style={styles.form}>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} placeholder="Логін" />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
              />
            </View>
            <View style={styles.inputPasswordWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
              />
              <TouchableOpacity>
                <Text style={{ fontSize: 16, color: "#1B4371" }}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
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
  inputWrapper: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },
  inputPasswordWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    justifyContent: "space-between",
    paddingRight: 85,
  },
  input: {
    height: 50,
    padding: 16,
    fontSize: 16,
    width: "100%",
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
