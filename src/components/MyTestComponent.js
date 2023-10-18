import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class MyTestComponent extends React.Component {
  constructor(props) {
    super(props);

    //following is how we initialize the state in class component
    this.state = {
      mutableBGColor: props.bgColor,
    };
  }

  render() {
    //following is how we use the state in class component
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
