import {} from 'react';
import {View, Text} from 'react-native';

import UserBasicInfo from './UserBasicInfo';
import UserContactInfo from './UserContactInfo';
import UserAddressInfo from './UserAddressInfo';

const UserProfile = props => {
  return (
    <View>
      <Text>USER PROFILE</Text>
      <UserBasicInfo {...props} />
      <UserContactInfo {...props} />
      <UserAddressInfo {...props} />
    </View>
  );
};

export default UserProfile;
