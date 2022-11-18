import { StateSchema } from 'app/providers/StoreProvider';

export const getRecentRatesList = (state: StateSchema) =>
  state.recentRates?.data;
export const getRecentRatesError = (state: StateSchema) =>
  state.recentRates?.errorMessage;
export const getRecentRatesIsLoading = (state: StateSchema) =>
  state.recentRates?.isLoading;
export const getRecentRates = (state: StateSchema) =>
  state.recentRates?.recetRates;
export const getRecentRatesInputValue = (state: StateSchema) =>
  state.recentRates?.inputValue;
export const getYesterdayRates = (state: StateSchema) =>
  state.recentRates?.yesterdayRates;
