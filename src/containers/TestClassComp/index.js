import React from 'react';
import {View, Text, TextInput} from 'react-native';

import LevelOne from './LevelOne';

class TestClassComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: 'some initial value',
      inputText2: 'some initial value2',
    };
  }

  render() {
    console.log('testclass rendered');

    const {inputText, inputText2} = this.state;

    return (
      <View style={{flex: 1}}>
        <TextInput
          value={this.state.inputText}
          onChangeText={changedText => {
            this.setState({inputText: changedText});
          }}
          style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
        />

        <TextInput
          value={this.state.inputText2}
          onChangeText={changedText => {
            this.setState({inputText2: changedText});
          }}
          style={{backgroundColor: 'pink', height: 40, padding: 5, margin: 10}}
        />

        <LevelOne inputText={inputText} inputText2={inputText2}></LevelOne>
      </View>
    );
  }
}

export default TestClassComp;
