import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchCurrencyValue = (state: StateSchema) =>
  state.searchCurrency?.value;
export const getSearchIsFocused = (state: StateSchema) =>
  state.searchCurrency?.isFocused;
