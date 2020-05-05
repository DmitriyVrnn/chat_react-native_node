import React, { useState } from 'react';
import {
  View, TextInput, Text
} from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { signIn } from '../../store/actions/user.action';
import SvgWave from '../../components/UI/SvgWave';

import { styles } from './styles';


export const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(signIn(email, password));
  };

  const goToSignUpScreen = () => {
    navigation.push('SignUp');
  };

  return (
    <View style={styles.container}>
      <SvgWave.WaveRight />
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
        <View style={styles.buttonWrap}>
          <Button
            // icon={(
            //   <Icon
            //     name="arrow-right"
            //     size={15}
            //     color="white"
            //   />
            // )}
            buttonStyle={styles.buttonActive}
            onPress={handleLogin}
            titleStyle={{
              color: 'white',
              marginLeft: 5,
              fontSize: 18,
              letterSpacing: 0.8,
              fontFamily: 'roboto-bold'
            }}
            title="Sign In"
          />
          <Button
            onPress={goToSignUpScreen}
            buttonStyle={styles.buttonInactive}
            titleStyle={{
              color: 'white',
              marginLeft: 5,
              fontSize: 18,
              letterSpacing: 0.8,
              fontFamily: 'roboto-bold'
            }}
            title="Sign Up"
          />
        </View>
      </View>
    </View>
  );
};
