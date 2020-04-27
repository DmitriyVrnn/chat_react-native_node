import React, { useState } from 'react';
import {
  View, TextInput,
} from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';

import { SvgWave } from '../../components/UI/SvgWave';
import { styles } from './styles';


export const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetPassword, setResetPassword] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = () => {};

  return (
    <View style={styles.container}>
      <SvgWave />
      <View style={styles.form}>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="Input email"
            onChangeText={setEmail}
            placeholderTextColor="#f5f5f5"
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="Input password"
            placeholderTextColor="#f5f5f5"
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="Reset password"
            placeholderTextColor="#f5f5f5"
            onChangeText={setResetPassword}
          />
        </View>
        <View style={styles.buttonWrap}>
          <Button
            buttonStyle={styles.button}
            onPress={handleSignUp}
            titleStyle={{
              color: 'white',
              marginLeft: 5,
              fontSize: 18,
              letterSpacing: 0.8,
              fontFamily: 'roboto-bold'
            }}
            title="Registration"
          />
        </View>
      </View>
    </View>
  );
};
