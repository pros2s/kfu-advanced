import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchCurrencySchema } from '../types/SearchCurrencySchema';

const initialState: SearchCurrencySchema = {
  value: '',
};

const searchCurrencySlice = createSlice({
  name: 'searchCurrency',
  initialState,
  reducers: {
    setValue(state, { payload }: PayloadAction<string>) {
      state.value = payload;
    },
  },
});

export const { actions: SearchCurrencyActions } = searchCurrencySlice;
export const { reducer: SearchCurrencyReducer } = searchCurrencySlice;
