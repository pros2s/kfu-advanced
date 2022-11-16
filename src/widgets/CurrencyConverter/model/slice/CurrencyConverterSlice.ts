import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyName } from 'entities/choseCurrency';
import { convert } from 'entities/choseCurrency/model/services/convert';
import { currentRate } from 'entities/choseCurrency/model/services/currentRate';
import { fetchSymbols } from 'widgets/CurrencyConverter/model/services/fetchSymbols';
import { ConvertResult } from 'widgets/CurrencyConverter/model/types/ConvertResult';
import { CurrencyConverterSchema } from '../types/CurrencyConverterSchema';

const initialState: CurrencyConverterSchema = {
  data: [],
  inputValue: '1.00',
  convertResult: undefined,
  currentRate: undefined,
  isLoading: false,
  errorMessage: '',
};

const currencyConverterSlice = createSlice({
  name: 'currencyConverter',
  initialState,
  reducers: {
    setInputValue(state, { payload }: PayloadAction<string>) {
      state.inputValue = payload;
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
          state.data = payload;
          state.errorMessage = '';
          state.isLoading = false;
        },
      )
      .addCase(fetchSymbols.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      })
      .addCase(convert.pending, (state) => {
        state.errorMessage = '';
        state.isLoading = true;
      })
      .addCase(
        convert.fulfilled,
        (state, { payload }: PayloadAction<ConvertResult>) => {
          state.convertResult = payload;
          state.errorMessage = '';
          state.isLoading = false;
        },
      )
      .addCase(convert.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      })
      .addCase(currentRate.pending, (state) => {
        state.errorMessage = '';
        state.isLoading = true;
      })
      .addCase(
        currentRate.fulfilled,
        (state, { payload }: PayloadAction<ConvertResult>) => {
          state.currentRate = payload;
          state.errorMessage = '';
          state.isLoading = false;
        },
      )
      .addCase(currentRate.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      });
  },
});

export const { actions: CurrencyConverterActions } = currencyConverterSlice;
export const { reducer: CurrencyConverterReducer } = currencyConverterSlice;
