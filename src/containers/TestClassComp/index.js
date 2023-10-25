import React from 'react';
import {View, Text, TextInput} from 'react-native';

import LevelOne from './LevelOne';

class TestClassComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: 'some initial value',
    };
  }

  render() {
    console.log('testclass rendered');

    const {inputText} = this.state;

    return (
      <View style={{flex: 1}}>
        <TextInput
          value={this.state.inputText}
          onChangeText={changedText => {
            this.setState({inputText: changedText});
          }}
          style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
        />

        <LevelOne inputText={inputText}></LevelOne>
        <LevelOne></LevelOne>
      </View>
    );
  }
}

export default TestClassComp;
