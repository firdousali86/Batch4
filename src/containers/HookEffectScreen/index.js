import {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import ChildComp from './myChildComp';

const HookEffectScreen = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log('useeffect called');

    return () => {
      console.log(
        'do you know, this should work as componentwillunmount, case 1',
      );
    };
  }, []); // only be called at once at the load time // componentdidmount

  useEffect(() => {
    console.log('second useeffect');
  }, []);

  useEffect(() => {
    console.log('third useeffect');
  }, []);

  useEffect(() => {
    console.log('states changed');

    return () => {
      console.log(
        'do you know, this should work as componentwillunmount, case 2',
      );
    };
  }, [firstName, lastName]);

  console.log('render ran');

  return (
    <View>
      <Text>test</Text>

      <TextInput
        value={firstName}
        onChangeText={ct => {
          setFirstName(ct);
        }}
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
      />
      <TextInput
        value={lastName}
        onChangeText={ct => {
          setLastName(ct);
        }}
        style={{backgroundColor: 'pink', height: 40, margin: 10, padding: 5}}
      />

      <ChildComp firstName={firstName} lastName={lastName} />
    </View>
  );
};

export default HookEffectScreen;
