import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Feather name="grid" size={24} color="black" />,
        }}
        name="Posts Screen"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Feather name="plus" size={24} color="black" />,
        }}
        name="Create Posts Screen"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Feather name="user" size={24} color="black" />,
        }}
        name="Profile Screen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default Home;
