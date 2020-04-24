import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from '../../screens/SingInScreen';

const Stack = createStackNavigator();

export const StackSignInNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{ title: 'Sign In' }}
    />
  </Stack.Navigator>
);
