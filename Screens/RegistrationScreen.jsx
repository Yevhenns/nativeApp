import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SVGadd from "../Components/SVGadd";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [formState, setFormState] = useState(initialState);
  const [isFocusedLogin, setFocusedLogin] = useState(false);
  const [isFocusedEmail, setFocusedEmail] = useState(false);
  const [isFocusedPassword, setFocusedPassword] = useState(false);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const focusLoginHandler = () => {
    setIsKeyboardShown(true);
    setFocusedLogin(true);
  };
  const focusEmailHandler = () => {
    setIsKeyboardShown(true);
    setFocusedEmail(true);
  };
  const focusPasswordHandler = () => {
    setIsKeyboardShown(true);
    setFocusedPassword(true);
  };
  const hideKeyboard = () => {
    Keyboard.dismiss();
    setIsKeyboardShown(false);
  };
  const togglePassword = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };
  const submitForm = () => {
    console.log(formState);
    setFormState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.wrapper}>
        <ImageBackground
          source={require("../assets/PhotoBG.jpg")}
          style={styles.image}
        >
          <View
            style={{
              ...styles.container,
              paddingBottom: isKeyboardShown ? 32 : 80,
            }}
          >
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
                  style={{
                    width: 120,
                    height: 120,
                    backgroundColor: "#F6F6F6",
                  }}
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
              <View
                style={{
                  ...styles.inputWrapper,
                  backgroundColor: isFocusedLogin ? "#FFFFFF" : "#F6F6F6",
                  borderColor: isFocusedLogin ? "#FF6C00" : "#E8E8E8",
                }}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Логін"
                  onFocus={focusLoginHandler}
                  onBlur={() => setFocusedLogin(false)}
                  value={formState.login}
                  onChangeText={(value) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      login: value,
                    }))
                  }
                />
              </View>
              <View
                style={{
                  ...styles.inputWrapper,
                  backgroundColor: isFocusedEmail ? "#FFFFFF" : "#F6F6F6",
                  borderColor: isFocusedEmail ? "#FF6C00" : "#E8E8E8",
                }}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  onFocus={focusEmailHandler}
                  onBlur={() => setFocusedEmail(false)}
                  value={formState.email}
                  onChangeText={(value) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      email: value,
                    }))
                  }
                />
              </View>
              <View
                style={{
                  ...styles.inputPasswordWrapper,
                  backgroundColor: isFocusedPassword ? "#FFFFFF" : "#F6F6F6",
                  borderColor: isFocusedPassword ? "#FF6C00" : "#E8E8E8",
                }}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  onFocus={focusPasswordHandler}
                  onBlur={() => setFocusedPassword(false)}
                  secureTextEntry={isPasswordHidden}
                  value={formState.password}
                  onChangeText={(value) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                />
                <TouchableOpacity onPress={togglePassword}>
                  {isPasswordHidden ? (
                    <Text style={styles.passwordActionText}>Показати</Text>
                  ) : (
                    <Text style={styles.passwordActionText}>Приховати</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
            {!isKeyboardShown && (
              <>
                <TouchableOpacity style={styles.button} onPress={submitForm}>
                  <Text style={styles.buttonText}>Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.navText}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    paddingTop: 90,
    marginTop: "auto",
  },
  form: {
    gap: 16,
    alignItems: "center",
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
  inputWrapper: {
    width: "100%",
    borderRadius: 8,
    borderWidth: 1,
  },
  inputPasswordWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
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
  passwordActionText: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto_400Regular",
  },
  button: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 45,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
  },
  navText: {
    textAlign: "center",
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto_400Regular",
  },
});
