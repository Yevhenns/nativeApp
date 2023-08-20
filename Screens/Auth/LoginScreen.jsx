import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

const initialStateLogIn = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [formState, setFormState] = useState(initialStateLogIn);
  const [isFocusedEmail, setFocusedEmail] = useState(false);
  const [isFocusedPassword, setFocusedPassword] = useState(false);

  if (!fontsLoaded && !fontError) {
    return null;
  }

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
    setFormState(initialStateLogIn);
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
            <Text style={styles.heading}>Увійти</Text>
            <View style={styles.form}>
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
                  <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("register")}
                >
                  <Text style={styles.navText}>
                    Немає акаунту? Зареєструватись
                  </Text>
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
    paddingTop: 32,
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
