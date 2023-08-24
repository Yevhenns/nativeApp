import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import LoginScreen from "./Screens/Auth/LoginScreen";

import Home from "./Screens/Main/Home";
import PostsScreen from "./Screens/Main/PostsScreen";
import CreatePostsScreen from "./Screens/Main/CreatePostsScreen";
import ProfileScreen from "./Screens/Main/ProfileScreen";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const useRoute = (isAuth) => {
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
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: (focused, color, size) => (
            <Ionicons name="grid-outline" size={24} color="black" />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="Posts Screen" component={PostsScreen} />
      <Tab.Screen name="Create Posts Screen" component={CreatePostsScreen} />
      <Tab.Screen
        options={{
          tabBarIcon: () => <Feather name="user" size={24} color="black" />,
        }}
        name="Profile Screen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
