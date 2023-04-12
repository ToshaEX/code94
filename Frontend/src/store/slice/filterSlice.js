import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: false,
  search: ''
};

export const filterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addFavorite: (state) => {
      state.favorite = !state.favorite;
    },
    addSearch: (state, payload) => {
      state.search = payload.text;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addFavorite, addSearch, incrementByAmount } = filterSlice.actions;

export default filterSlice.reducer;
