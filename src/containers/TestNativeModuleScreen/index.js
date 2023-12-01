import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  NativeEventEmitter,
  Button,
} from 'react-native';
import React, {useEffect} from 'react';

const {CalendarModule} = NativeModules;

const TestNativeModuleScreen = () => {
  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModules.CalendarModule);
    let eventListener = eventEmitter.addListener('EventReminder', event => {
      console.log(event.eventProperty); // "someValue"
    });

    // Removes the listener once unmounted
    return () => {
      eventListener.remove();
    };
  }, []);

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

      <Button
        title={'Hit with promise'}
        onPress={async () => {
          try {
            const eventId = await CalendarModule.createCalendarEvent3(
              'Party',
              'My House',
            );
            console.log(`Created a new event with id ${eventId}`);
          } catch (e) {
            console.error(e);
          }
        }}
      />
      <Button
        title={'Hit an API and export broadcast'}
        onPress={() => {
          CalendarModule.createCalendarEvent4('testName', 'testLocation');
        }}
      />
    </View>
  );
};

export default TestNativeModuleScreen;

const styles = StyleSheet.create({});
