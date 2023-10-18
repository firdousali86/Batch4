import {} from 'react';
import {View, Text, TextInput} from 'react-native';

const UserContactInfo = props => {
  const {inputStyle, userData} = props;
  const {phone, email} = userData;

  return (
    <View>
      <Text>USER Contact INFO</Text>

      <TextInput
        value={phone}
        onChangeText={() => {}}
        placeholder="Phone"
        style={inputStyle}
      />
      <TextInput
        value={email}
        onChangeText={() => {}}
        placeholder="Email"
        style={inputStyle}
      />
    </View>
  );
};

export default UserContactInfo;
