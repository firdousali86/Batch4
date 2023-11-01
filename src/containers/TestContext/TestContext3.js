import {useState, createContext, useContext, memo} from 'react';
import {View, Text, TextInput, TextComponent} from 'react-native';
import TestContext4 from './TestContext4';

const TestContext3 = ({}) => {
  console.log('component 3');
  return (
    <View style={{backgroundColor: 'green', margin: 5}}>
      <Text>component 3</Text>
      <TestContext4 />
    </View>
  );
};

export default TestContext3;
