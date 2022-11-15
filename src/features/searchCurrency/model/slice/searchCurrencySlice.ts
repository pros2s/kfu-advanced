import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchCurrencySchema } from '../types/SearchCurrencySchema';

const initialState: SearchCurrencySchema = {
  value: '',
  isFocused: false,
};

const searchCurrencySlice = createSlice({
  name: 'searchCurrency',
  initialState,
  reducers: {
    setValue(state, { payload }: PayloadAction<string>) {
      state.value = payload;
    },
    setIsFocused(state, { payload }: PayloadAction<boolean>) {
      state.isFocused = payload;
    },
  },
});

export const { actions: SearchCurrencyActions } = searchCurrencySlice;
export const { reducer: SearchCurrencyReducer } = searchCurrencySlice;
