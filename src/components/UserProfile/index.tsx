import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import UserBasicInfo from '../UserBasicInfo';
import UserContactInfo from '../UserContactInfo';
import UserAddressInfo from '../UserAddressInfo';

type UserProfileProps = {
  userData: UserData;
  inputStyle: any;
};

type UserData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  postal: string;
  street: string;
};

const UserProfile: React.FC<UserProfileProps> = (props: UserProfileProps) => {
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
        colorChangeCB={(requestedColor: string) => {
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
