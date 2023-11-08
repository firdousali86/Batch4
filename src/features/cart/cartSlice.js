import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;

      const itemPresentIndex = state.cartItems.findIndex(thisElement => {
        return thisElement.item.name === itemToAdd.name;
      });

      if (itemPresentIndex !== -1) {
        const itemFoundObject = state.cartItems[itemPresentIndex];
        itemFoundObject.quantity += 1;
      } else {
        state.cartItems.push({item: itemToAdd, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {},
    clearCart: state => {},
  },
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
