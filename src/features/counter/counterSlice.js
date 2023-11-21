import {createSlice} from '@reduxjs/toolkit';
import {addToCart} from '../cart/cartSlice';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // extraReducers: {
  //   ['cart/addToCart']: (state, action) => {
  //     state.value += 1;
  //   },
  // },
  extraReducers: builder => {
    builder.addCase(addToCart, (state, action) => {
      state.value += 1;
    });
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
