import {useState, memo} from 'react';
import {View, Text, TextInput, TextComponent} from 'react-native';
import TestContext5 from './TestContext5';
import {useUserContext} from '../../contexts/UserContext';

const TestContext4 = ({}) => {
  const {
    state: {username},
  } = useUserContext();

  console.log('component 4');
  return (
    <View style={{backgroundColor: 'yellow', margin: 5}}>
      <Text>component 4</Text>
      <Text>{username}</Text>
      <TestContext5 />
    </View>
  );
};

export default TestContext4;
