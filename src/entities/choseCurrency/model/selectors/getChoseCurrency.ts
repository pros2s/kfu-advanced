import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrencyList = (state: StateSchema) =>
  state.chooseCurrency?.data;
export const getCurrencyIsLoading = (state: StateSchema) =>
  state.chooseCurrency?.isLoading;
export const getCurrencyErrorMessage = (state: StateSchema) =>
  state.chooseCurrency?.errorMessage;
