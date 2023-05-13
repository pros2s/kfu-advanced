import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { ResentRatesActions } from '../slice/ResentRatesSlice';
import { ResentRatesParams } from '../types/ResentRatesSchema';

export const fetchRecentRates = createAsyncThunk<
  Record<string, number>,
  ResentRatesParams,
  ThunkConfig<string>
>(
  'recentRates/fetchRecentRates',
  async ({ base }, { rejectWithValue, extra, dispatch }) => {
    try {
      const response = await extra.api.get(
        `/latest/currencies/${base}.min.json`,
      );

      if (!response || !response.data) {
        throw new Error();
      }

      const values = Object.values(response.data);
      dispatch(ResentRatesActions.setRecentRatesDate(values[0] as string));

      return values[1] as Record<string, number>;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
