import {useState, memo} from 'react';
import {View, Text, TextInput, TextComponent} from 'react-native';
import {useUserContext} from '../../contexts/UserContext';

const TestContext5 = ({}) => {
  const {
    state: {data},
    actions: {setData},
  } = useUserContext();

  console.log('component 5');
  return (
    <View style={{backgroundColor: 'pink', margin: 5}}>
      <Text>component 5</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default TestContext5;
