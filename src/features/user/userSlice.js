const {createSlice} = require('@reduxjs/toolkit');

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    request: (state, action) => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.data = action.payload;
      state.isFetching = false;
      state.failure = false;
      state.errorMessage = '';
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
    },
    logout: state => {
      state.data = {};
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
