import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomNavigation } from './AppBottomNavigation';
import { darkCustomTheme, defaultCustomTheme } from '../theme';
import { StackAuthNavigation } from './stacks/StackAuthNavigation';


export const AppNavigation = () => {
  const isAuthSuccess = useSelector((state) => state.user.isAuthSuccess);
  return (
    <NavigationContainer theme={defaultCustomTheme}>
      {isAuthSuccess
        ? <AppBottomNavigation />
        : <StackAuthNavigation />}
    </NavigationContainer>
  );
};
