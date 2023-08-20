import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="register" component={RegistrationScreen} />
        <AuthStack.Screen name="login" component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
