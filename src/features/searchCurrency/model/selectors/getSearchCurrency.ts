import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchCurrencyValue = (state: StateSchema) =>
  state.searchCurrency?.value;
