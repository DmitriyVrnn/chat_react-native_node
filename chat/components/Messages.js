import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export const Messages = () => (
  <View style={styles.messageContainer}>
    <Text>messages</Text>
  </View>
);

const styles = StyleSheet.create({
  messageContainer: {
    height: '90%',
  }
});
