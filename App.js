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

        <Text>First Name</Text>
        <TextInput style={{height: 40, backgroundColor: '#c1bbfb'}} />

        <Text>Last Name</Text>
        <TextInput style={{height: 40, backgroundColor: '#c1bbfb'}} />

        <Text>City</Text>
        <TextInput style={{height: 40, backgroundColor: '#c1bbfb'}} />

        <Text>Country</Text>
        <TextInput style={{height: 40, backgroundColor: '#c1bbfb'}} />

        <Image
          style={{width: 200, height: 200, marginVertical: 20}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/600px-F-35A_flight_%28cropped%29.jpg',
          }}
        />

        <Image
          style={{width: 200, height: 200, marginVertical: 20}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/United_States_Air_Force_F-35A_MOD_45166050.jpg/440px-United_States_Air_Force_F-35A_MOD_45166050.jpg',
          }}
        />

        <Button
          title={'Submit'}
          onPress={() => {
            Alert.alert('Success', 'Form Submitted');
          }}
        />

        <TouchableOpacity
          activeOpacity={0.2}
          style={{marginHorizontal: 10, height: 300}}>
          <View>
            <Text>This is a touchable image</Text>
            <Image
              style={{width: 200, height: 200, marginVertical: 20}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/United_States_Air_Force_F-35A_MOD_45166050.jpg/440px-United_States_Air_Force_F-35A_MOD_45166050.jpg',
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          style={{marginHorizontal: 10, height: 300}}>
          <View>
            <Text>This is a touchable image</Text>
            <Image
              style={{width: 200, height: 200, marginVertical: 20}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/United_States_Air_Force_F-35A_MOD_45166050.jpg/440px-United_States_Air_Force_F-35A_MOD_45166050.jpg',
              }}
            />
          </View>
        </TouchableHighlight>
        <ActivityIndicator size="large" color="blue" />
      </ScrollView>
    </View>
  );
}

export default App;
