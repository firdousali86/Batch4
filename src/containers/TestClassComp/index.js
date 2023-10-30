import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {PersistanceHelper} from '../../helpers';
import LevelOne from './LevelOne';

const TestClassComp = props => {
  const [count, setCount] = useState(0);
  const [inputText, setInputValue] = useState('some initial value');
  const [inputText2, setInputValue2] = useState('some initial value2');

  const myCustomCallback = useCallback(() => {
    console.log('this is my callback');
  }, []);

  const increment = () => {
    setCount(c => c + 1);
  };

  useEffect(() => {
    someAsyncFunctionality();

    return () => {
      console.log('COMPONENT UNMOUNTED');
    };
  }, []);

  const someAsyncFunctionality = async () => {
    const myfetchedvalue = await PersistanceHelper.getValue('myFirstKey');
    const myFetchedObject = await PersistanceHelper.getObject('myFirstObject');

    console.log(myfetchedvalue);

    console.log(myFetchedObject);
  };

  const mycalculation = useMemo(() => expensiveCalculation(count), [count]);

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

      <Button
        title="Increase Count"
        onPress={() => {
          increment();
        }}
      />

      <Text>{mycalculation}</Text>

      <LevelOne
        inputText={inputText}
        someCallback={myCustomCallback}></LevelOne>
    </View>
  );
};

const expensiveCalculation = num => {
  console.log('Calculating');

  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }

  return num;
};

export default TestClassComp;
