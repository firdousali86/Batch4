import React from 'react';
import {View, Text} from 'react-native';

import LevelTwo from './LevelTwo';

class LevelOne extends React.Component {
  constructor(props) {
    super(props);

    console.log('level one constructor');
  }

  componentDidMount() {
    console.log('level one CDM');
  }

  componentDidUpdate() {
    console.log('level one CDU');
  }

  render() {
    console.log('level 1 rerendered');

    return (
      <View style={{flex: 1, margin: 5, backgroundColor: 'blue'}}>
        <LevelTwo></LevelTwo>
        <LevelTwo></LevelTwo>
      </View>
    );
  }
}

export default LevelOne;
