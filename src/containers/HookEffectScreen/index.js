import {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import ChildComp from './myChildComp';

const HookEffectScreen = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log('useeffect called');
  }, []); // only be called at once at the load time // componentdidmount

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
