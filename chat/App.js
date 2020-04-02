import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import { AppNavigation } from "./navigation/AppNavigation";


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}