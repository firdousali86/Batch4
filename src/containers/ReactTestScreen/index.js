import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

const ReactTestScreen = ({navigation}) => {
  const [textToShow, setTextToShow] = useState('');

  return (
    <View>
      <Text testID="welcome">index</Text>
      <Text>{textToShow}</Text>
      <Button
        testID="hello_button"
        onPress={() => {
          setTextToShow('Hello!!!');
        }}
        title="Hello button"
      />
      <Button
        testID="world_button"
        title="World Button"
        onPress={() => {
          navigation.navigate('reactTestScreen2');
        }}
      />
    </View>
  );
};

export default ReactTestScreen;

const styles = StyleSheet.create({});
