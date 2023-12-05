import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const ReactTestingComponent = () => {
  const [myText, setMyText] = useState('hello we are testing RTL');

  return (
    <View>
      <Text testID="mytextlabel">{myText}</Text>
      <Button
        testID="button1"
        title="Button 1"
        onPress={() => {
          setMyText('did it change');
        }}
      />
    </View>
  );
};

export default ReactTestingComponent;
