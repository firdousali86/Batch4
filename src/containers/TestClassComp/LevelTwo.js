import React from 'react';
import {View, Text} from 'react-native';

import LevelThree from './LevelThree';

class LevelTwo extends React.Component {
  constructor(props) {
    super(props);

    console.log('level two constructor');
  }

  componentDidMount() {
    console.log('level two CDM');
  }

  componentDidUpdate() {
    console.log('level two CDU');
  }

  render() {
    console.log('level 2 rerendered');

    return (
      <View style={{flex: 1, margin: 5, backgroundColor: 'yellow'}}>
        <LevelThree></LevelThree>
        <LevelThree></LevelThree>
        <LevelThree></LevelThree>
      </View>
    );
  }
}

export default LevelTwo;
