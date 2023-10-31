import {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {PersistanceHelper} from '../../helpers';
import {EventRegister} from 'react-native-event-listeners';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        value={username}
        onChangeText={ct => {
          setUsername(ct);
        }}
        style={{height: 40, backgroundColor: 'yellow', margin: 10}}
      />
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={ct => {
          setPassword(ct);
        }}
        style={{height: 40, backgroundColor: 'yellow', margin: 10}}
      />
      <Button
        title={'Login'}
        onPress={() => {
          PersistanceHelper.setObject('loginDetails', {username, password});

          setUsername('');
          setPassword('');

          EventRegister.emit('loginEvent', true);
        }}
      />
    </View>
  );
};

export default LoginScreen;
