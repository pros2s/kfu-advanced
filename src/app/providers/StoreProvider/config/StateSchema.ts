import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { SearchCurrencySchema } from 'entities/searchCurrency';
import { ChoseCurrencySchema, SymbolsSchema } from 'features/choseCurrency';
import { NavigateOptions, To } from 'react-router-dom';
import { CurrencyConverterSchema } from 'widgets/CurrencyConverter';
import { ResentRatesSchema } from 'widgets/RecentRates';

export interface StateSchema {
  recentRates: ResentRatesSchema;
  symbols: SymbolsSchema;

  // async
  currencyConverter?: CurrencyConverterSchema;

  searchFromCurrency?: SearchCurrencySchema;
  searchBaseCurrency?: SearchCurrencySchema;
  searchToCurrency?: SearchCurrencySchema;

  choseFromCurrency?: ChoseCurrencySchema;
  choseBaseCurrency?: ChoseCurrencySchema;
  choseToCurrency?: ChoseCurrencySchema;
}

export type StateSchemaFields = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaFields, reducer: Reducer) => void;
  remove: (key: StateSchemaFields) => void;
}

export interface ReduxStoreWithManger extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkAPI {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkAPI;
  state: StateSchema;
}
