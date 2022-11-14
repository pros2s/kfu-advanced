import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrencyList = (state: StateSchema) =>
  state.chooseCurrency?.data;
export const getCurrencyIsLoading = (state: StateSchema) =>
  state.chooseCurrency?.isLoading;
export const getCurrencyErrorMessage = (state: StateSchema) =>
  state.chooseCurrency?.errorMessage;

export const getCurrentCurrency = (state: StateSchema) =>
  state.chooseCurrency?.currentCurrency;
export const getIsCurMenu = (state: StateSchema) =>
  state.chooseCurrency?.isCurMenu;
