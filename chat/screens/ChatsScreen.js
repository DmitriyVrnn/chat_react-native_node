import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { ChatList } from "../containers/ChatList";
import { mockChats } from "../mock/mockChats";


export const ChatScreen = ({ chats }) => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <ChatList chats={mockChats}/>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
