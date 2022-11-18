import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ResentRatesParams } from '../types/ResentRatesSchema';

export const fetchRecentRates = createAsyncThunk<
  Record<string, number>,
  ResentRatesParams,
  ThunkConfig<string>
>(
  'currencyConverter/fetchRecentRates',
  async ({ base }, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get(
        `/latest/currencies/${base}.min.json`,
      );

      if (!response.data) {
        throw new Error();
      }

      return Object.values(response.data)[1] as Record<string, number>;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
