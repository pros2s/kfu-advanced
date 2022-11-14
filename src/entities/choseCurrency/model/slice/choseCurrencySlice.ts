import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSymbols } from '../services/fetchSymbols';
import { ChooseCurrencySchema, CurrencyName } from '../types/Currency';

const initialState: ChooseCurrencySchema = {
  errorMessage: '',
  currentCurrency: { abbr: 'RUB', description: 'Russian Ruble' },
  isCurMenu: false,
  isLoading: false,
  data: [],
};

const chooseCurrencySlice = createSlice({
  name: 'chooseCurrency',
  initialState,
  reducers: {
    setCurrentCurrency(state, { payload }: PayloadAction<CurrencyName>) {
      state.currentCurrency = payload;
    },
    setIsCurMenu(state, { payload }: PayloadAction<boolean>) {
      state.isCurMenu = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSymbols.pending, (state) => {
        state.errorMessage = '';
        state.isLoading = true;
      })
      .addCase(
        fetchSymbols.fulfilled,
        (state, { payload }: PayloadAction<CurrencyName[]>) => {
          state.errorMessage = '';
          state.data = payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchSymbols.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      });
  },
});

export const { actions: ChooseCurrencyActions } = chooseCurrencySlice;
export const { reducer: ChooseCurrencyReducer } = chooseCurrencySlice;
