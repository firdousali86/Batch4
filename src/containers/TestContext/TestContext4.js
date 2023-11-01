import {useState, createContext, useContext, memo} from 'react';
import {View, Text, TextInput, TextComponent} from 'react-native';
import TestContext5 from './TestContext5';

const TestContext4 = ({}) => {
  const user = ''; //useContext(UserContext);

  console.log('component 4');
  return (
    <View style={{backgroundColor: 'yellow', margin: 5}}>
      <Text>component 4</Text>
      <Text>{user}</Text>
      <TestContext5 />
    </View>
  );
};

export default TestContext4;
