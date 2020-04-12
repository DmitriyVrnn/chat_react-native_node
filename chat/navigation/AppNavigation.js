import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomNavigation } from './AppBottomNavigation';
import { darkCustomTheme, defaultCustomTheme } from '../theme';
import { StackSignInNavigation } from './stacks/StackSignInNavigation';

export const AppNavigation = () => {
  const [userToken, setUserToken] = useState(null);
  return (
    <NavigationContainer theme={defaultCustomTheme}>
      {userToken !== null ? <StackSignInNavigation /> : <AppBottomNavigation />}
    </NavigationContainer>
  );
};
