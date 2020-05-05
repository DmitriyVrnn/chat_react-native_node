import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StackChatsNavigator } from './stacks/StackChatsNavigation';
import { StackContactNavigator } from './stacks/StackContactNavigation';
import { StackSettingsNavigator } from './stacks/StackSettingsNavigation';
import { COLORS } from '../theme';


const BottomNavigator = createBottomTabNavigator();

export const AppBottomNavigation = () => (
  <BottomNavigator.Navigator
    tabBarOptions={{
      inactiveTintColor: COLORS.INACTIVE_TAB_BAR_COLOR,
      activeTintColor: COLORS.YELLOW_COLOR,
      shifting: true,
      style: { backgroundColor: COLORS.DARKEN_MAIN_COLOR },
    }}
  >
    <BottomNavigator.Screen
      name="Contacts"
      component={StackContactNavigator}
      options={{
        tabBarIcon: (info) => <Ionicons name="ios-settings" size={25} color={info.color} />,
        tabBarLabel: 'Contacts'
      }}
    />
    <BottomNavigator.Screen
      name="Chat"
      component={StackChatsNavigator}
      tintColor="#F5FCFF"
      options={{
        tabBarIcon: (info) => <Ionicons name="ios-chatboxes" size={25} color={info.color} />,
        tabBarLabel: 'Chat'
      }}
    />
    <BottomNavigator.Screen
      name="Settings"
      component={StackSettingsNavigator}
      options={{
        tabBarIcon: (info) => <Ionicons name="ios-settings" size={25} color={info.color} />,
        tabBarLabel: 'Settings'
      }}
    />
  </BottomNavigator.Navigator>
);
