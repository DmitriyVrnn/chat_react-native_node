import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const Chat = () => {
  return (
    <View style={styles.chatItem}>
      <Text>Chat Item</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  chatItem: {
    marginBottom: 15,
    overflow: 'hidden'
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