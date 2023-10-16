import React from 'react';
import {View, Text, TextInput} from 'react-native';

class MyTestComponent extends React.Component {
  render() {
    const {bgColor} = this.props;

    return (
      <View style={{backgroundColor: bgColor}}>
        <Text>Hello World</Text>
        <TextInput
          onChangeText={changedText => {
            console.log(changedText);
          }}
          style={{backgroundColor: 'gray', height: 40}}
        />
      </View>
    );
  }
}

export default MyTestComponent;
