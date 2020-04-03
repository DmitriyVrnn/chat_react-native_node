import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SettingsScreen } from "../screens/SettingsScreen";
import { StackChatsNavigator } from "./stacks/StackChatsNavigation";


const BottomNavigator = createBottomTabNavigator();

export const AppBottomNavigation = () => {
  return (
    <BottomNavigator.Navigator
      tabBarOptions={{
        inactiveTintColor: 'gray',
        shifting: true,
      }}
    >
      <BottomNavigator.Screen
        name="Chat"
        component={StackChatsNavigator}
        tintColor='#F5FCFF'
        options={{
          tabBarIcon: (info) => <Ionicons name='ios-chatboxes' size={25} color={info.color}/>,
          tabBarLabel: 'Chat'
        }}
      />
      <BottomNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: (info) => <Ionicons name='ios-settings' size={25} color={info.color}/>,
          tabBarLabel: 'Settings'
        }}
      />
    </BottomNavigator.Navigator>
  )
};