import {} from 'react';
import {View, Text} from 'react-native';

const MyHOC = props => {
  return (
    <View>
      <Text>MYHOC</Text>
      <View style={{backgroundColor: 'red'}}>{props.children}</View>
    </View>
  );
};

export default MyHOC;
