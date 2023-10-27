import React from 'react';
import {View, Text} from 'react-native';

const LevelThree = props => {
  console.log('level 3 rerendered');

  return <View style={{backgroundColor: 'green', flex: 1, margin: 5}}></View>;
};

export default LevelThree;
