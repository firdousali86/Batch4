import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import LevelTwo from './LevelTwo';
import _ from 'lodash';

const LevelOne = props => {
  const [sometext, setSomeText] = useState(props.inputText);

  useEffect(() => {
    console.log('level one CDM');
  }, []);

  useEffect(() => {
    console.log('level one CDU');

    setSomeText(props.inputText);
  }, [props.inputText]);

  console.log('level 1 rerendered');

  return (
    <View style={{flex: 1, margin: 5, backgroundColor: 'blue'}}>
      <Text style={{color: 'white'}}>{sometext}</Text>
      <LevelTwo></LevelTwo>
      <LevelTwo></LevelTwo>
    </View>
  );
};

export default LevelOne;

// shouldComponentUpdate(nextProps, nextState) {
//   const decision = nextProps.inputText !== this.props.inputText;

//   return decision;
// }
