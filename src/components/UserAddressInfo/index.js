import {} from 'react';
import {View, Text, TextInput} from 'react-native';

const UserAddressInfo = props => {
  const {inputStyle, userData} = props;
  const {city, country, postal, street} = userData;

  return (
    <View>
      <Text>USER ADDRESS INFO</Text>

      <TextInput
        value={city}
        onChangeText={() => {}}
        placeholder="City"
        style={inputStyle}
      />
      <TextInput
        value={country}
        onChangeText={() => {}}
        placeholder="Country"
        style={inputStyle}
      />
      <TextInput
        value={postal}
        onChangeText={() => {}}
        placeholder="Postal Code"
        style={inputStyle}
      />
      <TextInput
        value={street}
        onChangeText={() => {}}
        placeholder="Street"
        style={inputStyle}
      />
    </View>
  );
};

export default UserAddressInfo;
