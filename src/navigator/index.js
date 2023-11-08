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
} from '../containers';
import {useNavigation} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import {PersistanceHelper} from '../helpers';

const Stack = createNativeStackNavigator();

const Navigator = () => {
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

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigation = useNavigation();

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
    <Stack.Navigator>
      {isUserLoggedIn ? getMainStack() : getAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigator;
