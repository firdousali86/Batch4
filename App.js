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
import UserProfile from './src/components/UserProfile';

function App() {
  const [selectedColor, setSelectedColor] = useState('');
  console.log('APP GOT RENDERED');

  const userObject = {
    firstName: 'Firdous',
    lastName: 'Ali',
    phone: '123456789',
    email: 'firdous@firdous.com',
    city: 'Karachi',
    country: 'Pakistan',
    street: 'abc street',
    postal: '12345',
  };

  const inputStyle = {
    height: 40,
    backgroundColor: 'pink',
    margin: 10,
    padding: 5,
  };

  return (
    <View style={{flex: 1, marginTop: 90, marginHorizontal: 10}}>
      <ScrollView>
        <MyTestComponent />
        <MyTestFuncComponent />
        <UserProfile userData={userObject} inputStyle={inputStyle} />
      </ScrollView>
    </View>
  );
}

export default App;
