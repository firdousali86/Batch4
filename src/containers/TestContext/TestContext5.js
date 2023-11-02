import {useState, memo} from 'react';
import {View, Text, TextInput, TextComponent, Button} from 'react-native';
import {useUserContext} from '../../contexts/UserContext';

const TestContext5 = ({}) => {
  const {
    state: {username, isNotificationEnabled},
    actions: {setUsername, setIsNotifEnabled},
  } = useUserContext();

  console.log('component 5');
  return (
    <View style={{backgroundColor: 'pink', margin: 5}}>
      <Text>component 5</Text>
      <Text>{username}</Text>
      <Button
        title={'Change name'}
        onPress={() => {
          setUsername('New Name');
        }}
      />
      <Text>{isNotificationEnabled ? 'Enabled' : 'Disabled'}</Text>
    </View>
  );
};

export default TestContext5;
