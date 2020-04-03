import React from 'react';
import { View, Text, StyleSheet, ImageBackground, PixelRatio } from 'react-native';
import { useTheme } from '@react-navigation/native';



export const Chat = ({ item: { lastMessage, avatar, name, timeLastMessage } }) => {
  const { colors } = useTheme();

  const formatTimeLastMessage = new Date(timeLastMessage).toLocaleTimeString('en-GB', {
    hour: "numeric",
    minute: "numeric"
  });

  const styles = StyleSheet.create({
    chatItem: {
      height: 70,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomColor: '#323232',
      width: '100%'
    },
    imageWrap: {
      justifyContent: "center",
      width: 60,
      height: 60,
      borderRadius: PixelRatio.getPixelSizeForLayoutSize(60),
      overflow: "hidden",
      marginLeft: 5,
      marginRight: 10,
    },
    avatar: {
      resizeMode: 'contain',
      width: 'auto',
      height: '100%',
    },
    wrapInfo: {
      width: "80%",
      height: '100%',
      borderBottomColor: '#323232',
      borderBottomWidth: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center'
    },
    wrapTime: {
      marginRight: 10
    },
    name: {
      color: colors.text,
      marginTop: 6,
      fontSize: 18,
      marginBottom: 5,
    },
    lastMessage: {
      color: colors.text
    },
    time: {
      color: colors.text
    },
  });

  return (
    <View style={styles.chatItem}>
      <View style={styles.imageWrap}>
        <ImageBackground style={styles.avatar} source={{ uri: avatar }}/>
      </View>
      <View style={styles.wrapInfo}>
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.lastMessage}>{lastMessage}</Text>
        </View>
        <View style={styles.wrapTime}>
          <Text style={styles.time}>{formatTimeLastMessage}</Text>
        </View>
      </View>
    </View>
  )
};
