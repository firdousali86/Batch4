import React from 'react';
import {View, Text} from 'react-native';

const MyTestFuncComponent = props => {
  const {bgColor} = props;

  return (
    <View style={{backgroundColor: bgColor}}>
      <Text>Hello this is functional component</Text>
      <Text>{props.score}</Text>
    </View>
  );
};

// function MyTestFuncComponent(props){
//   return <View style={{backgroundColor:props.bgColor}}><Text>Hello this is functional component</Text></View>
// }

export default MyTestFuncComponent;
