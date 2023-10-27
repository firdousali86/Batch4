import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import LevelOne from './LevelOne';

const TestClassComp = props => {
  const [inputText, setInputValue] = useState('some initial value');
  const [inputText2, setInputValue2] = useState('some initial value2');

  useEffect(() => {
    return () => {
      console.log('COMPONENT UNMOUNTED');
    };
  }, []);

  console.log('testclass rendered');

  return (
    <View style={{flex: 1}}>
      <TextInput
        value={inputText}
        onChangeText={changedText => {
          setInputValue(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
      />

      <TextInput
        value={inputText2}
        onChangeText={changedText => {
          setInputValue2(changedText);
        }}
        style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
      />

      <LevelOne inputText={inputText} inputText2={inputText2}></LevelOne>
    </View>
  );
};

export default TestClassComp;
