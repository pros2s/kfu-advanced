import { StateSchema } from 'app/providers/StoreProvider';

export const getRecentRatesList = (state: StateSchema) =>
  state.recentRates?.data;
export const getRecentRatesError = (state: StateSchema) =>
  state.recentRates?.errorMessage;
export const getRecentRatesIsLoading = (state: StateSchema) =>
  state.recentRates?.isLoading;
