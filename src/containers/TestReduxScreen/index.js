import {} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../features/counter/counterSlice';

const TestReduxScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);

  console.log('it rendered!!');

  return (
    <View>
      <Text>test redux</Text>
      <Text>{counter}</Text>

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
      <Button
        title={'Increment by value'}
        onPress={() => {
          dispatch(incrementByAmount(5));
        }}
      />
    </View>
  );
};

export default TestReduxScreen;
