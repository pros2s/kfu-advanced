import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CurrencyName } from 'entities/choseCurrency';

export const fetchSymbols = createAsyncThunk<
  CurrencyName[],
  void,
  ThunkConfig<string>
>('currencyConverter/fetchSymbols', async (_, { rejectWithValue, extra }) => {
  try {
    const response = await extra.api.get('/latest/currencies.min.json');

    if (!response.data) {
      throw new Error();
    }

    return Object.entries(response.data).map(
      (arr): CurrencyName => ({
        abbr: arr[0],
        description: arr[1] as string,
      }),
    );
  } catch (e) {
    return rejectWithValue('error');
  }
});
