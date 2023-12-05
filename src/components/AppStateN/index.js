import {useEffect, useState} from 'react';
import {AppState as AppStateRN, Platform} from 'react-native';

const AppStateN = props => {
  const [appState, setAppState] = useState(AppStateRN.currentState);

  useEffect(() => {
    function handleAppStateChange(nextAppState) {
      const {handleAppState} = props;

      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        if (Platform.OS === 'ios') {
        }
      }

      if (nextAppState === 'active') {
        // DataHelper.getStore().dispatch(configRequest(API_GET_CONFIG, {}));
      }

      if (handleAppState) {
        // NotificationsHelper.getInitialNotification();
        handleAppState(nextAppState);
      }

      setAppState(nextAppState);
    }

    const appStateInst = AppStateRN.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      appStateInst.remove();
    };
  });

  return null;
};

export default AppStateN;
