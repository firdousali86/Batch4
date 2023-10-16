import React from 'react';
import {View, Text} from 'react-native';

class MyTestComponent extends React.Component {
  render() {
    const {bgColor} = this.props;

    return (
      <View style={{backgroundColor: bgColor}}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

export default MyTestComponent;
