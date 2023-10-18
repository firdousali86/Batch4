import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const MyTestFuncComponent = props => {
  const [mutableBGColor, setMutableBGColor] = useState(props.bgColor);

  const {score} = props;

  return (
    <View
      style={{
        backgroundColor: mutableBGColor,
      }}>
      <Text>Hello this is functional component</Text>
      <Text>{score}</Text>

      <TextInput
        onChangeText={changedText => {
          console.log(changedText);
        }}
        style={{backgroundColor: 'gray', height: 40}}
      />

      <TouchableOpacity
        onPress={() => {
          setMutableBGColor('red');
        }}>
        <Text>Change color to red</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setMutableBGColor('blue');
        }}>
        <Text>Change color to blue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setMutableBGColor('orange');
        }}>
        <Text>Change color to orange</Text>
      </TouchableOpacity>
    </View>
  );
};

// function MyTestFuncComponent(props){
//   return <View style={{backgroundColor:props.bgColor}}><Text>Hello this is functional component</Text></View>
// }

export default MyTestFuncComponent;
