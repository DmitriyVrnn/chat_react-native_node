import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { MessageInput } from '../components/MessageInput';
import { Messages } from '../components/Messages';


export const PrivateChatScreen = ({ navigation }) => {
  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: false
    });
  }, []);

  return (
    <View style={styles.container}>
      <Messages />
      <MessageInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
});
