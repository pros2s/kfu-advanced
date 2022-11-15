import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import { AxiosInstance } from 'axios';
import { ChoseCurrencySchema } from 'entities/choseCurrency';
import { SearchCurrencySchema } from 'features/searchCurrency';
import { NavigateOptions, To } from 'react-router-dom';
import { CurrencyConverterSchema } from 'widgets/CurrencyConverter';

export interface StateSchema {
  currencyConverter?: CurrencyConverterSchema;
  searchFromCurrency?: SearchCurrencySchema;
  searchToCurrency?: SearchCurrencySchema;
  choseFromCurrency?: ChoseCurrencySchema;
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
