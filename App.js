/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardScreen, SettingScreen} from './src/containers';

const Stack = createNativeStackNavigator();

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
          component={SettingScreen}
          initialParams={{city: 'New Delhi', country: 'India'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
