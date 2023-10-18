import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class MyTestComponent extends React.Component {
  constructor(props) {
    super(props);

    //following is how we initialize the state in class component
    this.state = {
      mutableBGColor: props.bgColor,
      myTextInput: '',
    };
  }

  render() {
    //following is how we use the state in class component
    const {mutableBGColor, myTextInput} = this.state;

    return (
      <View style={{backgroundColor: mutableBGColor}}>
        <Text>Hello World</Text>
        <TextInput
          placeholder="my placeholder"
          value={myTextInput}
          onChangeText={changedText => {
            this.setState({myTextInput: changedText});
          }}
          style={{
            backgroundColor: 'white',
            height: 40,
            borderWidth: 1,
            borderColor: 'black',
          }}
        />
        <TouchableOpacity
          onPress={() => {
            //TO CHANGE THE COLOR

            //following is how we change the state in class component
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
