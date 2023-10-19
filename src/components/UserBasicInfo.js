import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const UserBasicInfo = props => {
  let {inputStyle, firstName, lastName, bgColor, colorChangeCB} = props;

  return (
    <View style={{backgroundColor: bgColor}}>
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

      <TouchableOpacity
        onPress={() => {
          //here
          colorChangeCB('blue');
        }}>
        <Text>User info button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserBasicInfo;
