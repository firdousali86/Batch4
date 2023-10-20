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
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const DashboardScreen = props => {
  return (
    <SafeAreaView
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
                style={{
                  width: 20,
                  height: 20,
                  marginHorizontal: 10,
                }}
                source={{
                  uri: 'https://media.timeout.com/images/106049585/image.jpg',
                }}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{item.title}</Text>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Settings');
        }}
        style={{
          height: 40,
          marginHorizontal: 10,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Goto Settings</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="Settings"
          component={props => {
            return (
              <View>
                <Text>This is settings screen</Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.push('Settings');
                  }}
                  style={{
                    height: 40,
                    marginHorizontal: 10,
                    backgroundColor: 'pink',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>Goto Settings</Text>
                </TouchableOpacity>

                <Button
                  title={'Go to dashboard at once'}
                  onPress={() => {
                    props.navigation.navigate('Dashboard');
                  }}
                />
                <Button
                  title={'Go back'}
                  onPress={() => {
                    props.navigation.goBack();
                  }}
                />
              </View>
            );
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
