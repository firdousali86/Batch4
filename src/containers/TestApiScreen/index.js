import {useEffect, useState} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../features/counter/counterSlice';

const TestApiScreen = () => {
  const [data, setData] = useState([]);

  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(x => x.json())
      .then(response => {
        setData(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <Text>test</Text>

      <Button
        title={'Increment'}
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Button
        title={'Decrement'}
        onPress={() => {
          dispatch(decrement());
        }}
      />
      <Text>{count}</Text>
    </View>
  );
};

export default TestApiScreen;
