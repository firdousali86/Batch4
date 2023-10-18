import {} from 'react';
import {View, Text} from 'react-native';

import UserBasicInfo from './UserBasicInfo';
import UserContactInfo from './UserContactInfo';
import UserAddressInfo from './UserAddressInfo';

const UserProfile = props => {
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
      />
      <UserContactInfo {...props} />
      <UserAddressInfo {...props} />
    </View>
  );
};

export default UserProfile;
