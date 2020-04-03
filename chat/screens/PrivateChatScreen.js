import React, { useEffect } from 'react';
import { View, Text } from 'react-native';


export const PrivateChatScreen = ({ navigation }) => {
  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: false
    });
  }, []);


  return (
    <View>
      <Text>
        Private chat
      </Text>
    </View>
  );
};
