import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyName, fetchSymbols } from 'features/choseCurrency';
import { fetchYesterdayRates } from '../services/fetchYesterdayRates';
import { fetchRecentRates } from '../services/fetchRecentRates';

import { ResentRatesSchema } from '../types/ResentRatesSchema';

const initialState: ResentRatesSchema = {
  data: [],
  inputValue: '',
  isLoading: false,
  errorMessage: '',
  recetRates: undefined,
  yesterdayRates: undefined,
};

const resentRatesSlice = createSlice({
  name: 'resentRates',
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
          state.data = payload.sort((elem) => {
            if (
              elem.abbr === 'rub' ||
              elem.abbr === 'eur' ||
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
      })
      .addCase(fetchRecentRates.pending, (state) => {
        state.errorMessage = '';
        state.isLoading = true;
      })
      .addCase(
        fetchRecentRates.fulfilled,
        (state, { payload }: PayloadAction<Record<string, number>>) => {
          state.recetRates = payload;
          state.errorMessage = '';
          state.isLoading = false;
        },
      )
      .addCase(fetchRecentRates.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      })
      .addCase(fetchYesterdayRates.pending, (state) => {
        state.errorMessage = '';
        state.isLoading = true;
      })
      .addCase(
        fetchYesterdayRates.fulfilled,
        (state, { payload }: PayloadAction<Record<string, number>>) => {
          state.yesterdayRates = payload;
          state.errorMessage = '';
          state.isLoading = false;
        },
      )
      .addCase(fetchYesterdayRates.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isLoading = false;
      });
  },
});

export const { actions: ResentRatesActions } = resentRatesSlice;
export const { reducer: ResentRatesReducer } = resentRatesSlice;
