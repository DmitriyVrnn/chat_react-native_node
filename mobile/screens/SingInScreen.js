import React, { useState } from 'react';
import {
  View, TextInput, Button, StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/actions/user';
import { COLORS } from '../theme';
import { SvgFigure } from '../components/UI/SvgFigure';


export const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(signIn(username, password));
  };

  return (
    <View style={styles.container}>
      <SvgFigure />
      <View style={styles.form}>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="Input name"
            onChangeText={setUsername}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="Input password"
            placeholderTextColor="#fff"
            onChangeText={setPassword}
          />
        </View>
        <Button title="Enter" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.MAIN_COLOR,
    justifyContent: 'center',
  },
  inputWrap: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  form: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 50,
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  figure: {}
});
