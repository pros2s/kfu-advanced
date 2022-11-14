import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSymbols } from '../services/fetchSymbols';
import { ChooseCurrencySchema, CurrencyName } from '../types/Currency';

const initialState: ChooseCurrencySchema = {
  errorMessage: '',
  isLoading: false,
  data: [],
};

const chooseCurrencySlice = createSlice({
  name: 'chooseCurrency',
  initialState,
  reducers: {},
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
      .addCase(
        fetchSymbols.rejected,
        (state, { payload }) => {
          state.errorMessage = payload;
          state.isLoading = false;
        },
      );
  },
});

export const { actions: ChooseCurrencyActions } = chooseCurrencySlice;
export const { reducer: ChooseCurrencyReducer } = chooseCurrencySlice;
