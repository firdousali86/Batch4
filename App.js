/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';

import MyTestComponent from './src/components/MyTestComponent';
import MyTestFuncComponent from './src/components/MyTestFuncComponent';

function App() {
  const [selectedColor, setSelectedColor] = useState('');
  console.log('APP GOT RENDERED');

  return (
    <View style={{flex: 1, marginTop: 90, marginHorizontal: 10}}>
      <ScrollView>
        <Text>hello world</Text>

        <MyTestComponent bgColor="pink" testKey="testValue" />
        <MyTestFuncComponent bgColor="yellow" score={99} />

        <TouchableOpacity
          onPress={() => {
            setSelectedColor('red');
          }}>
          <Text>set to red</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedColor('blue');
          }}>
          <Text>set to blue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default App;
