import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

const MyTestFuncComponent = props => {
  const [mutableBGColor, setMutableBGColor] = useState(props.bgColor);
  const [myTextInput, setMyTextInput] = useState('');

  const {score} = props;

  console.log('MYFUNCTIONAL COMPONENT GOT RERENDERED');

  return (
    <View
      style={{
        backgroundColor: mutableBGColor,
      }}>
      <Text>Hello this is functional component</Text>
      <Text>{score}</Text>

      <TextInput
        value={myTextInput}
        onChangeText={changedText => {
          setMyTextInput(changedText);
        }}
        style={styles.textinput}
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
      <TouchableOpacity
        onPress={() => {
          setMutableBGColor(props.bgColor);
        }}>
        <Text>Change color to props color</Text>
      </TouchableOpacity>
    </View>
  );
};

// function MyTestFuncComponent(props){
//   return <View style={{backgroundColor:props.bgColor}}><Text>Hello this is functional component</Text></View>
// }

export default MyTestFuncComponent;
