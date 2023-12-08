import React, {useState, useEffect, Suspense} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import {PersistanceHelper} from '../../helpers';
import {EventRegister} from 'react-native-event-listeners';
import * as Keychain from 'react-native-keychain';
import {userActions} from '../../features/user/userSlice';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {LoginManager} from 'react-native-fbsdk-next';
import {Text} from '../../components';
import {Metrics} from '../../themes';
import Config from 'react-native-config';

const {logout} = userActions;

const MyHeavyComponent = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(() =>
    import('../../components/MapViewControl'),
  );
});

const markers = [
  {latitude: '37.794861', longitude: '-122.4106587', title: 'some location 1'},
  {latitude: '37.8078486', longitude: '-122.4102691', title: 'some location 2'},
  {latitude: '37.8278286', longitude: '-122.4102791', title: 'some location 3'},
  {latitude: '37.8378486', longitude: '-122.4102691', title: 'some location 4'},
  {latitude: '37.8578486', longitude: '-122.4302691', title: 'some location 5'},
  {latitude: '37.8878486', longitude: '-122.4502691', title: 'some location 6'},
];

const DashboardScreen = props => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const [cityList, setCityList] = useState([
    {city: 'London'},
    {city: 'Birmingham'},
    {city: 'NY'},
    {city: 'LA'},
  ]);

  useEffect(() => {
    console.log('=========');
    console.log(props.route.params);
    console.log('=========');
  }, [props.route.params]);

  useEffect(() => {
    // PersistanceHelper.setValue('somekey', 'somevalue');
    // Keychain.setInternetCredentials(
    //   'com.itc.securestorage',
    //   'myusername',
    //   'mypassword123',
    // )
    //   .then(success => {
    //     console.log(success);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, []);

  console.log('dashboard screen got rerendered');

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flex: 1}}>
        <Text>{Config.ENV}</Text>
        <Text>{Config.API_URL}</Text>
        <View style={{height: 400, width: Metrics.screenWidth}}>
          <Suspense fallback={<Text>Loading...</Text>}>
            <MyHeavyComponent markers={markers} />
          </Suspense>
        </View>

        <TextInput
          value={city}
          onChangeText={changedText => {
            setCity(changedText);
          }}
          placeholder="City"
          style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
        />

        <FlatList
          data={cityList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Settings', {
                    city: item.title,
                    country: 'somecountry',
                  });
                }}
                style={{
                  height: 40,
                  backgroundColor: 'blue',
                  marginVertical: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    marginHorizontal: 10,
                  }}
                  source={{
                    uri: 'https://media.timeout.com/images/106049585/image.jpg',
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text color={'accent'} type={'light_poppins'}>
                    {item.city}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Settings', {
              city,
              // country,
            });
          }}
          style={{
            height: 40,
            marginHorizontal: 10,
            backgroundColor: 'pink',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 100,
          }}>
          <Text>Goto Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('testClassComp');
          }}>
          <Text>Push class component</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('hookEffectScreen');
          }}>
          <Text>Push Functional component</Text>
        </TouchableOpacity>

        <Button
          title={'Add to city list'}
          onPress={() => {
            setCityList([...cityList, {title: city}]);

            setCity('');
          }}
        />
        <Button
          title={'Logout'}
          onPress={() => {
            auth()
              .signOut()
              .then(() => console.log('User signed out!'));

            LoginManager.logOut();

            // dispatch(logout());
            // PersistanceHelper.setObject('loginDetails', {});
            // EventRegister.emit('loginEvent', false);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
