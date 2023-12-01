import {StyleSheet, Text, View, NativeModules, Button} from 'react-native';
import React from 'react';

const {CalendarModule} = NativeModules;

const TestNativeModuleScreen = () => {
  return (
    <View>
      <Text>TestNativeModuleScreen</Text>
      <Button
        title={'Hit'}
        onPress={() => {
          CalendarModule.createCalendarEvent1('testName', 'testLocation');
        }}
      />

      <Button
        title={'Hit with callback'}
        onPress={() => {
          CalendarModule.createCalendarEvent2(
            'testName',
            'testLocation',
            arg => {
              console.log(arg);
            },
          );
        }}
      />
    </View>
  );
};

export default TestNativeModuleScreen;

const styles = StyleSheet.create({});
