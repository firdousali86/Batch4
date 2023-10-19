/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

import {
  MyHOC,
  MyTestComponent,
  MyTestFuncComponent,
  UserProfile,
} from './src/components';

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
    <View
      style={{
        flex: 1,
        flexDirection: 'column', //horizontal
        backgroundColor: 'red',
      }}>
      <View
        style={{
          flex: 1,
          margin: 10,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>First box</Text>
      </View>
      <View
        style={{
          flex: 1,
          margin: 10,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Second box</Text>
        <TouchableOpacity style={{position: 'absolute', bottom: 10, right: 10}}>
          <Text>Test Button</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          margin: 10,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Third box</Text>
      </View>
    </View>
  );
}

export default App;
