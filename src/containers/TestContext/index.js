import React, {useState, memo} from 'react';
import {View, Text, TextInput, TextComponent, Button} from 'react-native';
import TestContext2 from './TestContext2';
import TestContext5 from './TestContext5';
import {UserContextProvider} from '../../contexts/UserContext';

const TestContext = () => {
  const [user, setUser] = useState('Jessie Hall');
  const [isNotif, setIsNotif] = useState(false);

  console.log('component 1');

  return (
    <>
      <UserContextProvider
        username={user}
        setUsername={setUser}
        isNotificationEnabled={isNotif}
        setIsNotifEnabled={setIsNotif}>
        <View style={{backgroundColor: 'red', margin: 5}}>
          <Text>component 1 {user}</Text>
          <TextInput
            value={user}
            onChangeText={ct => {
              setUser(ct);
            }}
            style={{height: 40, backgroundColor: 'white', margin: 10}}
          />
          <TestContext2 />
          <Button
            title={'Switch notification'}
            onPress={() => {
              setIsNotif(!isNotif);
            }}
          />
          <Text>{isNotif ? 'Enabled' : 'Disabled'}</Text>
        </View>
      </UserContextProvider>
      <TestContext5 />
    </>
  );
};

export default TestContext;
