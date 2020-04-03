import React from 'react';
import {
  StyleSheet, View, ScrollView
} from 'react-native';

import { ChatList } from '../components/ChatList';
import { mockChats } from '../mock/mockChats';


export const ChatScreen = ({ chats, navigation }) => {
  const openChatHandler = (chat) => {
    navigation.push('PrivateChat', {
      chatId: chat.id,
      name: chat.name,
      avatar: chat.avatar,
    });
    navigation.setOptions({ tabBarVisible: false });
  };

  return (
    <ScrollView>
      <View style={styles.center}>
        <ChatList chats={mockChats} openChat={openChatHandler} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
