/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

import MyTestComponent from './src/components/MyTestComponent';
import MyTestFuncComponent from './src/components/MyTestFuncComponent';

function App(): JSX.Element {
  return (
    <View style={{flex: 1, marginTop: 90, marginHorizontal: 10}}>
      <Text>hello world</Text>

      <MyTestComponent bgColor="pink" testKey="testValue" />
      <MyTestFuncComponent bgColor="yellow" score={99} />
    </View>
  );
}

export default App;
