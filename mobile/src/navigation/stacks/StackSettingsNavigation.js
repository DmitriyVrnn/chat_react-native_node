import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../../screens/SettingsScreen';

const Stack = createStackNavigator();

export const StackSettingsNavigator = ({ navigation }) => {
  navigation.setOptions({ tabBarVisible: true });
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
    </Stack.Navigator>
  );
};
