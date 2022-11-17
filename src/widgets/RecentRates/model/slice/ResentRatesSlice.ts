import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyName, fetchSymbols } from 'features/choseCurrency';

import { ResentRatesSchema } from '../types/ResentRatesSchema';

const initialState: ResentRatesSchema = {
  data: [],
  isLoading: false,
  errorMessage: '',
};

const resentRatesSlice = createSlice({
  name: 'resentRates',
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
          state.data = payload.sort((elem) => {
            if (
              elem.abbr === 'rub' ||
              elem.abbr === 'usd' ||
              elem.abbr === 'gbp'
            ) {
              return -1;
            }
            return 1;
          });
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

export const { actions: ResentRatesActions } = resentRatesSlice;
export const { reducer: ResentRatesReducer } = resentRatesSlice;
