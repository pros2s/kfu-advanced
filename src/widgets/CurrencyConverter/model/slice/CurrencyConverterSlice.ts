import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyName } from 'entities/choseCurrency';
import { fetchRate } from 'entities/choseCurrency/model/services/fetchRate';
import { LOCALSTORAGE_INPUT_VALUE } from 'shared/consts/localeStorage';
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
      localStorage.setItem(LOCALSTORAGE_INPUT_VALUE, payload);
      state.inputValue = payload;
    },
    setDefaultInputValue(state) {
      const localeStorageValue = localStorage.getItem(LOCALSTORAGE_INPUT_VALUE);
      state.inputValue = localeStorageValue || '1.00';
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
      });
  },
});

export const { actions: CurrencyConverterActions } = currencyConverterSlice;
export const { reducer: CurrencyConverterReducer } = currencyConverterSlice;
