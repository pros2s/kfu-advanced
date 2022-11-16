import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyName } from 'entities/choseCurrency';
import { fetchRate } from 'entities/choseCurrency/model/services/fetchRate';
import { fetchSymbols } from 'widgets/CurrencyConverter/model/services/fetchSymbols';
import { CurrencyConverterSchema } from '../types/CurrencyConverterSchema';

const initialState: CurrencyConverterSchema = {
  data: [],
  inputValue: '1.00',
  rateResult: undefined,
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
      .addCase(fetchRate.pending, (state) => {
        state.errorMessage = '';
        state.isLoading = true;
      })
      .addCase(
        fetchRate.fulfilled,
        (state, { payload }: PayloadAction<number>) => {
          state.rateResult = payload;
          state.errorMessage = '';
          state.isLoading = false;
        },
      )
      .addCase(fetchRate.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      })
      // .addCase(currentRate.pending, (state) => {
      //   state.errorMessage = '';
      //   state.isLoading = true;
      // })
      // .addCase(
      //   currentRate.fulfilled,
      //   (state, { payload }: PayloadAction<ConvertResult>) => {
      //     state.currentRate = payload;
      //     state.errorMessage = '';
      //     state.isLoading = false;
      //   },
      // )
      // .addCase(currentRate.rejected, (state, { payload }) => {
      //   state.errorMessage = payload;
      //   state.isLoading = false;
      // });
  },
});

export const { actions: CurrencyConverterActions } = currencyConverterSlice;
export const { reducer: CurrencyConverterReducer } = currencyConverterSlice;
