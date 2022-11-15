import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CurrencyName } from 'entities/choseCurrency';

export const fetchSymbols = createAsyncThunk<
  CurrencyName[],
  void,
  ThunkConfig<string>
>('profile/fetchSymbols', async (_, { rejectWithValue, extra }) => {
  try {
    const response = await extra.api.get('/symbols');

    if (!response.data) {
      throw new Error();
    }

    return Object.entries(response.data.symbols).map(
      (arr): CurrencyName => ({
        abbr: arr[0],
        description: arr[1] as string,
      }),
    );
  } catch (e) {
    return rejectWithValue('error');
  }
});
