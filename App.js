import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import LoginScreen from "./Screens/Auth/LoginScreen";
import Home from "./Screens/Main/Home";
import PostsScreen from "./Screens/Main/PostsScreen";
import CreatePostsScreen from "./Screens/Main/CreatePostsScreen";
import ProfileScreen from "./Screens/Main/ProfileScreen";

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Posts Screen" component={PostsScreen} />
      <Tab.Screen name="Create Posts Screen" component={CreatePostsScreen} />
      <Tab.Screen name="Profile Screen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
