import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChatScreen } from '../../screens/ChatsScreen';
import { PrivateChatScreen } from '../../screens/PrivateChatScreen';
import { AvatarApp } from '../../components/UI/Avatar';


const Stack = createStackNavigator();

export const StackChatsNavigator = () => (
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
        headerRight: () => (
          <AvatarApp uri={route.params.avatar} size="MT" style={{ marginRight: 5 }} />
        )
      })}
    />
  </Stack.Navigator>
);
