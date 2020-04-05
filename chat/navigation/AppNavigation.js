import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomNavigation } from './AppBottomNavigation';
import { darkCustomTheme, defaultCustomTheme } from '../theme';

export const AppNavigation = () => (
  <NavigationContainer theme={defaultCustomTheme}>
    <AppBottomNavigation />
  </NavigationContainer>
);
