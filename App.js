/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {store, persistor} from './src/store';
import {Provider} from 'react-redux';
import Navigator from './src/navigator';
import {AppStateN as AppStateComponent} from './src/components';
import {appStateActions} from './src/features/appState/appStateSlice';

import {PersistGate} from 'redux-persist/integration/react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log('Initial state: ', store.getState());
    // const unsubscribe = store.subscribe(() => {
    //   // console.log('Updated state: ', store.getState());
    // });
    // return () => {
    //   unsubscribe();
    // };

    LogBox.ignoreAllLogs();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      loadingCompleted();
    }
  }, [isLoading]);

  const onBeforeLift = () => {
    setIsLoading(false);
  };

  const loadingCompleted = () => {};

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
          <Navigator />
        </PersistGate>
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
