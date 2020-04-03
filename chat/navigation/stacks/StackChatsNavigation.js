import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChatScreen } from "../../screens/ChatsScreen";
import { PrivateChatScreen } from "../../screens/PrivateChatScreen";

const Stack = createStackNavigator();

export const StackChatsNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Chats"
        component={ChatScreen}
        options={{ title: 'Chats' }}
      />
      <Stack.Screen
        name="PrivateChat"
        component={PrivateChatScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  )
};