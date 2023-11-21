import cart from './cart/cartSlice';
import counter from './counter/counterSlice';
import item from './item/itemSlicer';
import user from './user/userSlice';
import {itemApi} from '../services/itemApi';

export default {
  cart: cart,
  counter: counter,
  item: item,
  user: user,
  itemApi: itemApi.reducer,
};
