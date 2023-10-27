import React from 'react';
import {View, Text} from 'react-native';

import LevelThree from './LevelThree';

const LevelTwo = props => {
  console.log('level 2 rerendered');

  return (
    <View style={{flex: 1, margin: 5, backgroundColor: 'yellow'}}>
      <LevelThree></LevelThree>
      <LevelThree></LevelThree>
      <LevelThree></LevelThree>
    </View>
  );
};

export default LevelTwo;
