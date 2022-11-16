import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  ConvertParams,
  ConvertResult,
} from '../../../../widgets/CurrencyConverter/model/types/ConvertResult';

export const convert = createAsyncThunk<
  ConvertResult,
  ConvertParams,
  ThunkConfig<string>
>(
  'currencyConverter/convert',
  async ({ amount, from, to }, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get('/convert', {
        params: { from, to, amount },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
