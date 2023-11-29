import {useState} from 'react';
import {View, Text, TextInput, Button, ActivityIndicator} from 'react-native';
import {PersistanceHelper, ApiHelper} from '../../helpers';
// import {EventRegister} from 'react-native-event-listeners';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from '../../features/user/userSlice';
import {kApiUserLogin} from '../../config/WebService';
import auth from '@react-native-firebase/auth';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk-next';

const {request, success, failure} = userActions;

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccessToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      return auth().signInWithCredential(facebookCredential);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        autoCapitalize="none"
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

      <View style={{alignItems: 'center'}}>
        <Button
          title={'Login'}
          onPress={async () => {
            // PersistanceHelper.setObject('loginDetails', {username, password});
            // dispatch(request({url: kApiUserLogin, data: {email, password}}));

            // try {
            //   const response = await ApiHelper.post(kApiUserLogin, {
            //     email,
            //     password,
            //   });

            //   dispatch(success(response));

            //   setEmail('');
            //   setPassword('');
            // } catch (error) {
            //   dispatch(failure(error));
            // }

            // EventRegister.emit('loginEvent', true);

            auth()
              .signInWithEmailAndPassword(email, password)
              .then(data => {
                console.log(data);
              })
              .catch(err => {
                console.log(err);
              });
          }}
        />

        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                // console.log(data?.accessToken.toString());

                const facebookCredential = auth.FacebookAuthProvider.credential(
                  data.accessToken,
                );

                // Sign-in the user with the credential
                auth()
                  .signInWithCredential(facebookCredential)
                  .then(success => {
                    console.log(success);
                  })
                  .catch(error => {
                    console.log(error);
                  });
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />

        <Button
          title={'FB LOGIN'}
          onPress={() => {
            onFacebookButtonPress();
          }}
        />

        <Button
          title={'Goto Signup'}
          onPress={() => {
            props.navigation.navigate('Signup');
          }}
        />
      </View>

      {user.isFetching && <ActivityIndicator />}
    </View>
  );
};

export default LoginScreen;
