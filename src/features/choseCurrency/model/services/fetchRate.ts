import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ConvertParams } from 'widgets/CurrencyConverter/model/types/ConvertResult';

export const fetchRate = createAsyncThunk<
  number,
  ConvertParams,
  ThunkConfig<string>
>(
  'currencyConverter/fetchRate',
  async ({ from, to }, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get(
        `/latest/currencies/${from}/${to}.min.json`,
      );

      if (!response.data) {
        throw new Error();
      }

      return Number(Object.values(response.data)[1]);
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
