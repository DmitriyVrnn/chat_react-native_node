import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChatScreen } from "../../screens/ChatsScreen";

const Stack = createStackNavigator();

export const StackChatNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Chats"
        component={ChatScreen}
        options={{ title: 'Chats' }}
      />
    </Stack.Navigator>
  )
};