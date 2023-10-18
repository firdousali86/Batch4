import React from 'react';
import {View, Text, TextInput} from 'react-native';

const MyTestFuncComponent = props => {
  const {bgColor, score} = props;

  return (
    <View style={{backgroundColor: bgColor, height: 100}}>
      <Text>Hello this is functional component</Text>
      <Text>{score}</Text>

      <TextInput
        onChangeText={changedText => {
          console.log(changedText);
        }}
        style={{backgroundColor: 'gray', height: 40}}
      />
    </View>
  );
};

// function MyTestFuncComponent(props){
//   return <View style={{backgroundColor:props.bgColor}}><Text>Hello this is functional component</Text></View>
// }

export default MyTestFuncComponent;
