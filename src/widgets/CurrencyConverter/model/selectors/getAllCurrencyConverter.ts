import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrencyList = (state: StateSchema) =>
  state.currencyConverter?.data;
export const getConverterError = (state: StateSchema) =>
  state.currencyConverter?.errorMessage;
export const getConverterIsLoading = (state: StateSchema) =>
  state.currencyConverter?.isLoading;
export const getConverterInputValue = (state: StateSchema) =>
  state.currencyConverter?.inputValue;
export const getConverterResult = (state: StateSchema) =>
  state.currencyConverter?.convertResult;
export const getConverterCurrentRate = (state: StateSchema) =>
  state.currencyConverter?.currentRate;
