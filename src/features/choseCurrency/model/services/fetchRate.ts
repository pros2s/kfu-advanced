import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ConvertParams } from 'widgets/CurrencyConverter/model/types/ConvertResult';

export const fetchRate = createAsyncThunk<
  number,
  ConvertParams,
  ThunkConfig<string>
>(
  'choseCurrency/fetchRate',
  async ({ from, to }, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get(
        `/currency-api@latest/v1/currencies/${from}.min.json`,
      );

      if (!response.data) {
        throw new Error();
      }

      return response.data[from][to];
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
