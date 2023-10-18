import {} from 'react';
import {View, Text, TextInput} from 'react-native';

const UserBasicInfo = props => {
  const {inputStyle, userData} = props;
  const {firstName, lastName} = userData;

  return (
    <View>
      <Text>BASIC USER INFO</Text>

      <TextInput
        value={firstName}
        onChangeText={() => {}}
        placeholder="First Name"
        style={inputStyle}
      />
      <TextInput
        value={lastName}
        onChangeText={() => {}}
        placeholder="Last Name"
        style={inputStyle}
      />
    </View>
  );
};

export default UserBasicInfo;
