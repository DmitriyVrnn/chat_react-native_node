import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet
} from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { signIn } from '../store/actions/user';
import { SvgFigure } from '../components/UI/SvgFigure';

import { COLORS } from '../theme';


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
        <View style={styles.buttonWrap}>
          <Button
            icon={(
              <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
            )}
            buttonStyle={styles.button}
            onPress={handleLogin}
            titleStyle={{
              color: 'white',
              marginLeft: 5,
              fontSize: 16,
              fontFamily: 'roboto-regular'
            }}
            title="Enter"
          />
        </View>
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
    backgroundColor: '#465881',
    width: '80%',
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
    width: '80%',
    height: 50,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'roboto-regular'
  },
  buttonWrap: {
    marginTop: 20,
    width: '80%',
  },
  button: {
    backgroundColor: COLORS.SECOND_COLOR,
    padding: 10,
    borderRadius: 25,
  }
});
