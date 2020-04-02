import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const Chat = ({ item: { lastMessage, avatar, name, timeLastMessage } }) => {
  return (
    <View style={styles.chatItem}>
      <Text style={styles.textWrap}>{name}</Text>
      <Text>{lastMessage}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  chatItem: {
    marginBottom: 15,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular'
  }
});