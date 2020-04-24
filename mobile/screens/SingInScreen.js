import React, { useState } from 'react';
import {
  View, TextInput, Button, StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/actions/user';


export const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(signIn(username, password));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textarea}
        placeholder="Input name"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.textarea}
        placeholder="Input password"
        onChangeText={setPassword}
      />
      <Button title="Enter" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
