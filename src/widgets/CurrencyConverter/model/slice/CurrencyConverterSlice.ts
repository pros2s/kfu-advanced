import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyName } from 'entities/choseCurrency';
import { fetchSymbols } from 'widgets/CurrencyConverter/model/services/fetchSymbols';
import { CurrencyConverterSchema } from '../types/CurrencyConverterSchema';

const initialState: CurrencyConverterSchema = {
  data: [],
  isLoading: false,
  errorMessage: '',
};

const currencyConverterSlice = createSlice({
  name: 'currencyConverter',
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
          state.data = payload;
          state.errorMessage = '';
          state.isLoading = false;
        },
      )
      .addCase(fetchSymbols.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      });
  },
});

export const { actions: CurrencyConverterActions } = currencyConverterSlice;
export const { reducer: CurrencyConverterReducer } = currencyConverterSlice;
