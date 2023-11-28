import {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
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
  TestReduxScreen,
  CartScreen,
  TestReduxClass,
  TypescriptScreen,
  SignupScreen,
  ItemsCRUD,
  UserProfileEdit,
  RTKQueryScreen,
  MapScreen,
  LocationTestScreen,
  TestSSLPinning,
} from '../containers';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import {PersistanceHelper, NotificationHelper} from '../helpers';
import {addSslPinningErrorListener} from 'react-native-ssl-public-key-pinning';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const user = useSelector(state => state.user);

  useEffect(() => {
    const subscription = addSslPinningErrorListener(error => {
      // Triggered when an SSL pinning error occurs due to pin mismatch
      console.log(error.serverHostname);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    // EventRegister.addEventListener('loginEvent', data => {
    //   setIsUserLoggedIn(data);
    // });
    // PersistanceHelper.getObject('loginDetails')
    //   .then(data => {
    //     if (data.username && data.password) {
    //       setIsUserLoggedIn(true);
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    NotificationHelper.initializeFCM();
    NotificationHelper.checkFCMPermission();
    NotificationHelper.getToken();

    PersistanceHelper.getValue('AT').then(data => {
      PersistanceHelper.accessToken = data;
    });
  }, []);

  useEffect(() => {
    setIsUserLoggedIn(
      user?.data?.created && user?.data?.ttl && user?.data?.userId
        ? true
        : false,
    );
  }, [user]);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    user?.data?.created && user?.data?.ttl && user?.data?.userId ? true : false,
  );
  const navigation = useNavigation();

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Signup" component={SignupScreen}></Stack.Screen>
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="testSSLPinning"
          component={TestSSLPinning}
          options={{title: 'Test SSL Pinning'}}
        />
        <Stack.Screen
          name="locationTestScreen"
          component={LocationTestScreen}
          options={{title: 'Location Test Screen'}}
        />

        <Stack.Screen
          name="itemsCRUD"
          component={ItemsCRUD}
          options={{title: 'Items CRUD'}}
        />

        <Stack.Screen
          name="mapScreen"
          component={MapScreen}
          options={{title: 'Map Screen'}}
        />

        <Stack.Screen
          name="rTKQueryScreen"
          component={RTKQueryScreen}
          options={{title: 'RTK Query Screen'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="testReduxScreen"
          component={TestReduxScreen}
          options={{
            title: 'Test Redux',
            headerRight: () => (
              <Button
                title={'Cart'}
                onPress={() => {
                  navigation.navigate('cartScreen');
                }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="userProfileEdit"
          component={UserProfileEdit}
          options={{title: 'User Profile Edit'}}
        />

        <Stack.Screen
          name="Typescript"
          component={TypescriptScreen}
          options={{title: 'Typescript'}}
        />

        <Stack.Screen
          name="testApiScreen"
          component={TestApiScreen}
          options={{title: 'Test API'}}
        />
        <Stack.Screen
          name="testReduxClass"
          component={TestReduxClass}
          options={{
            title: 'Test Redux Class impl',
            headerRight: () => (
              <Button
                title={'Cart'}
                onPress={() => {
                  navigation.navigate('cartScreen');
                }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="cartScreen"
          component={CartScreen}
          options={{
            title: 'Cart Screen',
            headerRight: () => (
              <Button
                title={'Clear Cart'}
                onPress={() => {
                  //call clear cart action
                }}
              />
            ),
          }}
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
    <Stack.Navigator>{true ? getMainStack() : getAuthStack()}</Stack.Navigator>
  );
};

export default Navigator;
