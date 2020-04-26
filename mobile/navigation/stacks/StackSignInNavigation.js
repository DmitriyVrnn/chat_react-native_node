import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from '../../screens/SingInScreen';
import { COLORS } from '../../theme';

const Stack = createStackNavigator();

export const StackSignInNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{
        title: 'Sign In',
        headerStyle: {
          backgroundColor: COLORS.SECOND_COLOR,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </Stack.Navigator>
);
