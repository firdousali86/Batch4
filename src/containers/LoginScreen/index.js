import {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {PersistanceHelper, ApiHelper} from '../../helpers';
// import {EventRegister} from 'react-native-event-listeners';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../../features/user/userSlice';
import {kApiUserLogin} from '../../config/WebService';

const {request, success, failure} = userActions;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        value={email}
        onChangeText={ct => {
          setEmail(ct);
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
        onPress={async () => {
          // PersistanceHelper.setObject('loginDetails', {username, password});
          dispatch(request({email, password}));

          try {
            const response = await ApiHelper.post(kApiUserLogin, {
              email,
              password,
            });

            dispatch(success(response));

            setEmail('');
            setPassword('');
          } catch (error) {
            dispatch(failure(error));
          }

          // EventRegister.emit('loginEvent', true);
        }}
      />
    </View>
  );
};

export default LoginScreen;
