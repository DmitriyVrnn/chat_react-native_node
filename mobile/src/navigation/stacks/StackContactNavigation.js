import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ContactScreen } from '../../screens/ContactScreen';

const Stack = createStackNavigator();

export const StackContactNavigator = ({ navigation }) => {
  navigation.setOptions({ tabBarVisible: true });
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contacts"
        component={ContactScreen}
        options={{ title: 'Contacts' }}
      />
    </Stack.Navigator>
  );
};
