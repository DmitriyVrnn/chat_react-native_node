import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomNavigation } from './AppBottomNavigation';
import { darkCustomTheme } from '../theme';

export const AppNavigation = () => (
  <NavigationContainer theme={darkCustomTheme}>
    <AppBottomNavigation />
  </NavigationContainer>
);
