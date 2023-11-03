/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DashboardScreen,
  SettingScreen,
  HookEffectScreen,
  TestClassComp,
  TestContext,
  LoginScreen,
  TestUseRef,
  TestApiScreen,
} from './src/containers';
import {Text, View} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';

import {PersistanceHelper} from './src/helpers';

const Stack = createNativeStackNavigator();

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    EventRegister.addEventListener('loginEvent', data => {
      setIsUserLoggedIn(data);
    });

    PersistanceHelper.getObject('loginDetails')
      .then(data => {
        if (data.username && data.password) {
          setIsUserLoggedIn(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
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
          name="testApiScreen"
          component={TestApiScreen}
          options={{title: 'Test API'}}
        />
        <Stack.Screen
          name="testUseRef"
          component={TestUseRef}
          options={{title: 'Test Useref'}}
        />
        <Stack.Screen
          name="testContext"
          component={TestContext}
          options={{title: 'Class components'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{title: 'Overview'}}
        />

        <Stack.Screen
          name="testClassComp"
          component={TestClassComp}
          options={{title: 'Class components'}}
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
