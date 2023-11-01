import {useState, createContext, useContext, memo} from 'react';
import {View, Text, TextInput, TextComponent} from 'react-native';
import TestContext3 from './TestContext3';

const TestContext2 = memo(({}) => {
  console.log('component 2');
  return (
    <View style={{backgroundColor: 'blue', margin: 5}}>
      <Text>component 2</Text>
      <TestContext3 />
    </View>
  );
});

export default TestContext2;
