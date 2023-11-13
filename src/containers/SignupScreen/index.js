import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {userActions} from '../../features/user/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {ApiHelper} from '../../helpers';
import {kApiUserSignup} from '../../config/WebService';

const {request, success, failure} = userActions;

export default function SignupScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [errorMsg, setErrorMsg] = useState(undefined);

  const user = useSelector(state => state.user);

  useEffect(() => {
    if (user?.errorMessage?.message) {
      //   Alert.alert('Error', user?.errorMessage?.message);
      setErrorMsg(user?.errorMessage?.message);
    } else {
      setErrorMsg(undefined);
    }
  }, [user]);

  const dispatch = useDispatch();

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={ct => {
          setEmail(ct);
        }}
        defaultValue="Enter Email"
        style={{backgroundColor: 'yellow', height: 40, margin: 10, padding: 5}}
      />
      <TextInput
        value={password}
        onChangeText={ct => {
          setPassword(ct);
        }}
        defaultValue="Enter Password"
        style={{backgroundColor: 'yellow', height: 40, margin: 10, padding: 5}}
      />
      {errorMsg && errorMsg.length > 0 && (
        <Text style={{color: 'red', marginHorizontal: 20}}>{errorMsg}</Text>
      )}
      <Button
        title={'Signup'}
        onPress={() => {
          dispatch(request({email, password}));

          ApiHelper.post(kApiUserSignup, {email, password})
            .then(response => {
              dispatch(success(response));

              props.navigation.navigate('Login');
            })
            .catch(error => {
              dispatch(failure(error));
            });
        }}
      />
      {user.isFetching && <ActivityIndicator />}

      <Button
        title={'Goto Login'}
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
    </View>
  );
}
