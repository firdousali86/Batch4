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
} from '../containers';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import {PersistanceHelper} from '../helpers';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const user = useSelector(state => state.user);

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
  }, []);

  useEffect(() => {
    setIsUserLoggedIn(
      user?.data?.accessToken &&
        typeof user?.data?.accessToken === 'string' &&
        user?.data?.accessToken.length > 50
        ? true
        : false,
    );
  }, [user]);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(user?.data?.id);
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
          name="rTKQueryScreen"
          component={RTKQueryScreen}
          options={{title: 'RTK Query Screen'}}
        />
        <Stack.Screen
          name="userProfileEdit"
          component={UserProfileEdit}
          options={{title: 'User Profile Edit'}}
        />
        <Stack.Screen
          name="itemsCRUD"
          component={ItemsCRUD}
          options={{title: 'Items CRUD'}}
        />
        <Stack.Screen
          name="Typescript"
          component={TypescriptScreen}
          options={{title: 'Typescript'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{title: 'Overview'}}
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
