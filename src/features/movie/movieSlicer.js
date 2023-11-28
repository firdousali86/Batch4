const {createSlice} = require('@reduxjs/toolkit');

const initialState = {data: []};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      state.data = action.payload?.data?.results;
      state.failure = false;
      state.errorMessage = {};
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
      state.failure = true;
    },
    addMovie: (state, action) => {
      const movieToAdd = action.payload;

      state.movies.push(movieToAdd);
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
