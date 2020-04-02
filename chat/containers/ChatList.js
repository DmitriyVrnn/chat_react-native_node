import React from 'react';
import { Chat } from "../components/Chat";
import { View, FlatList, StyleSheet, Text } from "react-native";


export const ChatList = ({ chats }) => {
  if (!chats.length) {
    return (
      <View style={styles.wrapper}>
        <Text>У вас нет чатов</Text>
      </View>
    )
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={chats}
        keyExtractor={chat => chat.id.toString()}
        renderItem={({ chat }) => {
          return <Chat chat={chat}/>
        }}/>
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
});
