import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomNavigation } from "./AppBottomNavigation";

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppBottomNavigation/>
    </NavigationContainer>
  )
};