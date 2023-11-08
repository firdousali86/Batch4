import {} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../features/counter/counterSlice';
import {
  addToCart,
  removeFromCart,
  clearCart,
} from '../../features/cart/cartSlice';

const itemList = [
  {name: 'Macbook', details: 'Macbook pro with M3', price: 2500},
  {name: 'iPhone', details: 'iPhone 15 pro', price: 1500},
  {name: 'iPad', details: 'Sleek and smart', price: 800},
  {name: 'Tripod', details: 'something details', price: 50},
  {name: 'Newtonian Telescope', details: '13 inch', price: 500},
  {name: 'LED', details: '5w', price: 5},
];

const TestReduxScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);

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

      <FlatList
        data={itemList}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginHorizontal: 10,
                backgroundColor: 'yellow',
                margin: 10,
              }}>
              <Text>{item.name}</Text>
              <Text>{item.details}</Text>
              <Text>{item.price}</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(addToCart(item));
                }}>
                <Text>Add to cart</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TestReduxScreen;
