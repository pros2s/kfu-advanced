import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import dateFormat from 'dateformat';

import { ResentRatesParams } from '../types/ResentRatesSchema';

export const fetchYesterdayRates = createAsyncThunk<
  Record<string, number>,
  ResentRatesParams,
  ThunkConfig<string>
>(
  'recentRates/fetchYesterdayRates',
  async ({ base, date }, { rejectWithValue, extra }) => {
    const newDate = new Date(date!);

    newDate.setDate(newDate.getDate() - 1);
    const isoDate = dateFormat(newDate, 'isoDate');

    try {
      if (!base) {
        throw new Error();
      }

      const response = await extra.api.get(
        `/${isoDate}/currencies/${base}.min.json`,
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
