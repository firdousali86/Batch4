/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DashboardScreen,
  SettingScreen,
  HookEffectScreen,
} from './src/containers';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={() => (
            <View>
              <Text>Login</Text>
            </View>
          )}></Stack.Screen>
        <Stack.Screen
          name="Signup"
          component={() => (
            <View>
              <Text>Signup</Text>
            </View>
          )}></Stack.Screen>
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="hookEffectScreen"
          component={HookEffectScreen}
          initialParams={{city: 'New Delhi', country: 'India'}}
        />

        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          initialParams={{city: 'New Delhi', country: 'India'}}
        />
      </Stack.Group>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isUserLoggedIn ? getMainStack() : getAuthStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
