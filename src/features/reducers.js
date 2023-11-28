import cart from './cart/cartSlice';
import counter from './counter/counterSlice';
import item from './item/itemSlicer';
import user from './user/userSlice';
import movie from './movie/movieSlicer';
import {itemApi} from '../services/itemApi';

export default {
  cart: cart,
  counter: counter,
  item: item,
  user: user,
  movie: movie,
  itemApi: itemApi.reducer,
};
