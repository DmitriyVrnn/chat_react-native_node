import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { ChatList } from "../containers/ChatList";
import { mockChats } from "../mock/mockChats";


export const ChatScreen = ({ chats }) => {
  return (
    <ScrollView>
      <ChatList chats={mockChats}/>
    </ScrollView>
  )
};
