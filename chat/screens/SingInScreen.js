import React from 'react';
import {
  View, TextInput, Button, StyleSheet
} from 'react-native';


export const SignInScreen = () => (
  <View style={styles.container}>
    <TextInput
      style={styles.textarea}
      placeholder="Input name"
    />
    <Button title="Enter" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
