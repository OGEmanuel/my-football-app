import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  country: [],
};

const countriesSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    selectCountry: (state, { payload }) => {
      state.country = payload;
    },
  },
});

export const { selectCountry } = countriesSlice.actions;

export default countriesSlice.reducer;
