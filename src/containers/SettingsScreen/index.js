import {} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

const SettingScreen = props => {
  return (
    <View>
      <Text>This is settings screen</Text>
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
    </View>
  );
};

export default SettingScreen;
