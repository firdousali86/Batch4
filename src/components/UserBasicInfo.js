import {} from 'react';
import {View, Text, TextInput} from 'react-native';

const UserBasicInfo = props => {
  const {inputStyle, firstName, lastName} = props;

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
