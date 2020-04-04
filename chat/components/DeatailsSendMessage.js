import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';


export const DetailsSendMessage = () => (
  <Input placeholder="Input message" style={styles.input} />
);

const styles = StyleSheet.create({
  input: {
    height: '10%'
  }
});
