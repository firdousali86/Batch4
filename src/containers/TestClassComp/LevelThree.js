import React from 'react';
import {View, Text} from 'react-native';

class LevelThree extends React.Component {
  constructor(props) {
    super(props);

    console.log('level three constructor');
  }

  componentDidMount() {
    console.log('level three CDM');
  }

  componentDidUpdate() {
    console.log('level three CDU');
  }

  render() {
    console.log('level 3 rerendered');

    return <View style={{backgroundColor: 'green', flex: 1, margin: 5}}></View>;
  }
}

export default LevelThree;
