/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

import MyTestComponent from './src/components/MyTestComponent';
import MyTestFuncComponent from './src/components/MyTestFuncComponent';

function App() {
  return (
    <View style={{flex: 1, marginTop: 90, marginHorizontal: 10}}>
      <ScrollView>
        <Text>hello world</Text>

        <MyTestComponent bgColor="pink" testKey="testValue" />
        <MyTestFuncComponent bgColor="yellow" score={99} />
      </ScrollView>
    </View>
  );
}

export default App;
