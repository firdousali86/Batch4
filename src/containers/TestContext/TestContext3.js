import React, {useState, createContext, useContext, memo} from 'react';
import {View, Text, TextInput, TextComponent, Button} from 'react-native';
import TestContext4 from './TestContext4';

import {useUserContext} from '../../contexts/UserContext';

const TestContext3 = ({}) => {
  const {
    actions: {setIsNotifEnabled},
  } = useUserContext();

  console.log('component 3');
  return (
    <View style={{backgroundColor: 'green', margin: 5}}>
      <Text>component 3</Text>
      <Button
        title="disable notif settings"
        onPress={() => {
          setIsNotifEnabled(false);
        }}
      />
      <TestContext4 />
    </View>
  );
};

export default TestContext3;
