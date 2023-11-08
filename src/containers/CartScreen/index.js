import {} from 'react';
import {useSelector} from 'react-redux';
import {Text, View, FlatList, Button} from 'react-native';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  console.log(cartItems);

  return (
    <View>
      <Text>cart screen</Text>
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginHorizontal: 10,
                backgroundColor: 'pink',
                marginVertical: 5,
                padding: 5,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text>{item.item.name}</Text>
                  <Text>{item.item.details}</Text>
                </View>
                <View>
                  <Text>{item.item.price}</Text>
                  <Text>{item.quantity}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Button title={'+'} onPress={() => {}} />
                  <Button title={'-'} onPress={() => {}} />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CartScreen;
