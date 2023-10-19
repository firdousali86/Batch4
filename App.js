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
  FlatList,
  Image,
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
      }}>
      <FlatList
        data={[
          {title: 'London'},
          {title: 'Birmingham'},
          {title: 'NY'},
          {title: 'LA'},
        ]}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: 40,
                backgroundColor: 'yellow',
                marginVertical: 5,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={{width: 20, height: 20}}
                source={{
                  uri: 'https://media.timeout.com/images/106049585/image.jpg',
                }}
              />
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default App;
