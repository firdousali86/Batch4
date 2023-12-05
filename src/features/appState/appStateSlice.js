import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentState: undefined,
};

const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    appStateChange: (state, action) => {
      state.currentState = action.payload;
    },
  },
});

export const appStateActions = appStateSlice.actions;

export default appStateSlice.reducer;
