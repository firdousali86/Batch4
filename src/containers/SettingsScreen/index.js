import {useEffect} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import * as Keychain from 'react-native-keychain';
import {PersistanceHelper} from '../../helpers';

const SettingScreen = props => {
  useEffect(async () => {
    const fetchedval = await PersistanceHelper.getValue('somekey');

    console.log(fetchedval);
    // Keychain.getInternetCredentials('com.itc.securestorage')
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, []);

  const {route} = props;

  return (
    <View>
      <Text>This is settings screen</Text>

      <Text>{route.params.city}</Text>
      <Text>{route.params.country}</Text>

      <TouchableOpacity
        onPress={() => {
          props.navigation.push('Settings');
        }}
        style={{
          height: 40,
          marginHorizontal: 10,
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Goto Settings</Text>
      </TouchableOpacity>

      <Button
        title={'Go to dashboard at once'}
        onPress={() => {
          props.navigation.navigate('Dashboard');
        }}
      />
      <Button
        title={'Go back'}
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button
        title={'Pop to top'}
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
      <Button
        title={'Update params'}
        onPress={() => {
          props.navigation.setParams({
            city: 'London',
            country: 'UK',
          });
        }}
      />

      <TouchableOpacity
        onPress={() => {
          //to pass props forward
          // props.navigation.navigate('Dashboard', {ddf:dfgf});

          //to pass props backward
          props.navigation.navigate({
            name: 'Dashboard',
            params: {batch: 5, topic: 'navigation data passing'},
            merge: true,
          });
        }}>
        <Text>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
