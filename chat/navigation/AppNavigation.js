import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { AppBottomNavigation } from "./AppBottomNavigation";

export const AppNavigation = () => {
  const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#ffd600',
      text: '#fff',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <AppBottomNavigation/>
    </NavigationContainer>
  )
};