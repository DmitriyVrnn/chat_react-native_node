import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen } from "../screens/ChatsScreen";
import { Ionicons } from "@expo/vector-icons";
import { SettingsScreen } from "../screens/SettingsScreen";
import { StackChatNavigator } from "./stacks/StackNavigation";


const BottomNavigator = createBottomTabNavigator();

export const AppBottomNavigation = () => {
  return(
    <BottomNavigator.Navigator
      tabBarOptions={{
        inactiveTintColor: 'gray',
        shifting: true,
      }}
    >
      <BottomNavigator.Screen
        name="Chat"
        component={StackChatNavigator}
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