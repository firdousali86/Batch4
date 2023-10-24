import {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const myChildComp = props => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);

  //   console.log('child comp renders: ' + JSON.stringify(props));

  useEffect(() => {
    setFirstName(props.firstName);
  }, [props.firstName]);

  useEffect(() => {
    setLastName(props.lastName);
  }, [props.lastName]);

  return (
    <View>
      <Text style={{backgroundColor: 'yellow'}}>{firstName}</Text>
      <Text style={{backgroundColor: 'yellow'}}>{lastName}</Text>
    </View>
  );
};

export default myChildComp;
