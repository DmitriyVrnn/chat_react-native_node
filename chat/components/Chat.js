import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


export const Chat = ({ item: { lastMessage, avatar, name, timeLastMessage } }) => {
  const formatTimeLastMessage = new Date(timeLastMessage).toLocaleTimeString('en-GB', {
    hour: "numeric",
    minute: "numeric"
  });
  return (
    <View style={styles.chatItem}>
      <View style={styles.imageWrap}>
        <ImageBackground style={styles.avatar} source={{ uri: avatar }}/>
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.lastMessage}>{lastMessage}</Text>
      </View>
      <View>
        <Text>{formatTimeLastMessage}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  chatItem: {
    height: 70,
    overflow: 'hidden',
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#323232',
  },

  imageWrap: {
    width: '25%'
  },

  avatar: {
    marginLeft: 5,
    resizeMode: 'contain',
    width: 65,
    height: 65,
    borderRadius: 70 / 2,
    overflow: "hidden",
  },

  details: {
    width: "60%",
    height: '100%',
    borderBottomColor: '#323232',
    borderBottomWidth: 1,
  },

  name: {
    marginTop: 6,
    fontSize: 18,
    marginBottom: 5,
  }
});
