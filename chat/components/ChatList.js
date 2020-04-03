import React from 'react';
import { Chat } from "./Chat";
import { View, FlatList, StyleSheet, Text } from "react-native";


export const ChatList = ({ chats, openChat }) => {
  if (!chats.length) {
    return (
      <View style={styles.wrapper}>
        <Text>No chats</Text>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={chats}
        keyExtractor={chat => chat.id.toString()}
        renderItem={({ item }) => {
          return <Chat item={item} openChat={openChat}/>
        }}/>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 5,
    flexDirection: 'row'
  },
});
