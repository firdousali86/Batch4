import React, {useState} from 'react';
import {View, Text} from 'react-native';

import LevelTwo from './LevelTwo';
import _ from 'lodash';

class LevelOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {sometext: props.inputText};

    console.log('level one constructor');
  }

  componentDidMount() {
    console.log('level one CDM');
  }

  shouldComponentUpdate(nextProps, nextState) {
    const decision = nextProps.inputText !== this.props.inputText;

    return decision;
  }

  componentDidUpdate(prevProps) {
    console.log('level one CDU');

    console.log(prevProps);
    console.log(this.props);

    if (prevProps.inputText !== this.props.inputText) {
      this.setState({sometext: this.props.inputText});
    }
  }

  render() {
    console.log('level 1 rerendered');

    const {sometext} = this.state;

    return (
      <View style={{flex: 1, margin: 5, backgroundColor: 'blue'}}>
        <Text style={{color: 'white'}}>{sometext}</Text>
        <LevelTwo></LevelTwo>
        <LevelTwo></LevelTwo>
      </View>
    );
  }
}

export default LevelOne;
