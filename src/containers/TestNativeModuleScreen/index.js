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
          CalendarModule.createCalendarEvent('testName', 'testLocation');
        }}
      />
    </View>
  );
};

export default TestNativeModuleScreen;

const styles = StyleSheet.create({});
