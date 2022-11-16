import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChoseCurrencySchema, CurrencyName } from '../types/Currency';

const initialState: ChoseCurrencySchema = {
  currentCurrency: { abbr: 'usd', description: 'United States Dollar' },
  isCurMenu: false,
};

const choseFromCurrencySlice = createSlice({
  name: 'choseFromCurrency',
  initialState,
  reducers: {
    setFromCurrentCurrency(state, { payload }: PayloadAction<CurrencyName>) {
      state.currentCurrency = payload;
    },
    setIsFromCurMenu(state, { payload }: PayloadAction<boolean>) {
      state.isCurMenu = payload;
    },
  },
});

export const { actions: ChoseFromCurrencyActions } = choseFromCurrencySlice;
export const { reducer: ChoseFromCurrencyReducer } = choseFromCurrencySlice;
