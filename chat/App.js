import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { bootstrap } from "./bootstrap";

import { AppNavigation } from "./navigation/AppNavigation";
import { AppLoading } from "expo";


export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}