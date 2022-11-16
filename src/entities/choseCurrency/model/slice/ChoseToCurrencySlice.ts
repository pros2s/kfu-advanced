import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChoseCurrencySchema, CurrencyName } from '../types/Currency';

const initialState: ChoseCurrencySchema = {
  currentCurrency: { abbr: 'rub', description: 'Russian Ruble' },
  isCurMenu: false,
};

const choseToCurrencySlice = createSlice({
  name: 'choseToCurrency',
  initialState,
  reducers: {
    setToCurrentCurrency(state, { payload }: PayloadAction<CurrencyName>) {
      state.currentCurrency = payload;
    },
    setIsToCurMenu(state, { payload }: PayloadAction<boolean>) {
      state.isCurMenu = payload;
    },
  },
});

export const { actions: ChoseToCurrencyActions } = choseToCurrencySlice;
export const { reducer: ChoseToCurrencyReducer } = choseToCurrencySlice;
