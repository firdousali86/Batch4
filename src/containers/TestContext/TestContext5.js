import {useState, memo} from 'react';
import {View, Text, TextInput, TextComponent} from 'react-native';

const TestContext5 = ({}) => {
  const user = '';

  console.log('component 5');
  return (
    <View style={{backgroundColor: 'pink', margin: 5}}>
      <Text>component 5</Text>
      <Text>{user}</Text>
    </View>
  );
};

export default TestContext5;
