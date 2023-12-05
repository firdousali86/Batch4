/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {store} from './src/store';
import {Provider} from 'react-redux';
import Navigator from './src/navigator';
import {AppStateN as AppStateComponent} from './src/components';
import {appStateActions} from './src/features/appState/appStateSlice';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigator />
      </Provider>
      <AppStateComponent
        handleAppState={nextState => {
          store.dispatch(appStateActions.appStateChange(nextState));
        }}
      />
    </NavigationContainer>
  );
}

export default App;
