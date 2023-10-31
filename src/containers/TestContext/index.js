import {useState, memo} from 'react';
import {View, Text, TextInput} from 'react-native';

const TestContext = () => {
  const [user, setUser] = useState('Jessie Hall');

  console.log('component 1');

  return (
    <View style={{backgroundColor: 'red', margin: 5}}>
      <Text>component 1 {user}</Text>
      <TextInput
        value={user}
        onChangeText={ct => {
          setUser(ct);
        }}
        style={{height: 40, backgroundColor: 'white', margin: 10}}
      />
      <TestContext2 user={user} />
    </View>
  );
};

const TestContext2 = memo(({user}) => {
  console.log('component 2');
  return (
    <View style={{backgroundColor: 'blue', margin: 5}}>
      <Text>component 2</Text>
      <TestContext3 user={user} />
    </View>
  );
});

const TestContext3 = memo(({user}) => {
  console.log('component 3');
  return (
    <View style={{backgroundColor: 'green', margin: 5}}>
      <Text>component 3</Text>
      <TestContext4 user={user} />
    </View>
  );
});

const TestContext4 = memo(({user}) => {
  console.log('component 4');
  return (
    <View style={{backgroundColor: 'yellow', margin: 5}}>
      <Text>component 4</Text>
      <TestContext5 user={user} />
    </View>
  );
});

const TestContext5 = memo(({user}) => {
  console.log('component 5');
  return (
    <View style={{backgroundColor: 'pink', margin: 5}}>
      <Text>component 5</Text>
      <Text>{user}</Text>
    </View>
  );
});

export default TestContext;
