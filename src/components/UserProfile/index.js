import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import UserBasicInfo from '../UserBasicInfo';
import UserContactInfo from '../UserContactInfo';
import UserAddressInfo from '../UserAddressInfo';

const UserProfile = props => {
  const [backColor, setBackColor] = useState('yellow');

  const {userData, inputStyle} = props;

  const {firstName, lastName, phone, email, city, country, postal, street} =
    userData;

  return (
    <View>
      <Text>USER PROFILE</Text>
      <UserBasicInfo
        inputStyle={inputStyle}
        firstName={firstName}
        lastName={lastName}
        bgColor={backColor}
        colorChangeCB={requestedColor => {
          setBackColor(requestedColor);
        }}
      />
      <UserContactInfo {...props} />
      <UserAddressInfo {...props} />

      <TouchableOpacity
        onPress={() => {
          setBackColor('red');
        }}>
        <Text>Submit Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
