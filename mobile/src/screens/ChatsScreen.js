import React from 'react';
import {
  StyleSheet, View, ScrollView
} from 'react-native';
import { useSelector } from 'react-redux';

import { ChatList } from '../components/ChatList';
import { mockChats } from '../mock/mockChats';


export const ChatScreen = ({ chats, navigation }) => {
  const user = useSelector((state) => state.user);
  console.log(user.userData)
  const openChatHandler = (chat) => {
    navigation.push('PrivateChat', {
      chatId: chat.id,
      name: chat.name,
      avatar: chat.avatar,
    });
    navigation.setOptions({ tabBarVisible: false });
  };

  return (
    <ChatList chats={mockChats} openChat={openChatHandler} />
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
