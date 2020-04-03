import React from 'react';
import {
  View, FlatList, StyleSheet, Text
} from 'react-native';
import { Chat } from './Chat';


export const ChatList = ({ chats, openChat }) => {
  if (!chats.length) {
    return (
      <View style={styles.wrapper}>
        <Text>No chats</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={chats}
        keyExtractor={(chat) => chat.id.toString()}
        renderItem={({ item }) => <Chat item={item} openChat={openChat} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 5,
    flexDirection: 'row'
  },
});
