import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class MyTestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mutableBGColor: props.bgColor,
    };
  }

  render() {
    const {mutableBGColor} = this.state;

    return (
      <View style={{backgroundColor: mutableBGColor}}>
        <Text>Hello World</Text>
        <TextInput
          onChangeText={changedText => {
            console.log(changedText);
          }}
          style={{backgroundColor: 'gray', height: 40}}
        />
        <TouchableOpacity
          onPress={() => {
            //TO CHANGE THE COLOR
            this.setState({mutableBGColor: 'blue'});
          }}>
          <Text>Press to blue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            //TO CHANGE THE COLOR
            this.setState({mutableBGColor: 'red'});
          }}>
          <Text>Press to red</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            //TO CHANGE THE COLOR
            this.setState({mutableBGColor: 'orange'});
          }}>
          <Text>Press to orange</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MyTestComponent;
