import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from '../../screens/AuthScreens/SingInScreen';
import { COLORS } from '../../theme';
import { SignUpScreen } from '../../screens/AuthScreens/SignUpScreen';

const Stack = createStackNavigator();

export const StackAuthNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{
        title: 'LOGIN',
        headerStyle: {
          backgroundColor: COLORS.SECOND_COLOR,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '700',
          fontFamily: 'noto-sans-black',
          fontSize: 20,
          letterSpacing: 0.6,
          color: COLORS.MAIN_COLOR,
        },
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{
        title: 'SIGN UP',
        headerStyle: {
          backgroundColor: COLORS.SECOND_COLOR,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '700',
          fontFamily: 'noto-sans-black',
          fontSize: 20,
          letterSpacing: 0.6,
          color: COLORS.MAIN_COLOR,
        },
      }}
    />
  </Stack.Navigator>
);
