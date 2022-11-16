import { memo } from 'react';

import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { SearchFromCurrency } from 'features/searchCurrency';
import { CurrencyFromMenu } from 'features/currencyMenu';
import { ChoseFromCurrencyReducer } from '../model/slice/ChoseFromCurrencySlice';
import {
  getFromCurrentCurrency,
  getIsFromCurMenu,
} from '../model/selectors/getAllFromCurrency';
import { CurrencyName } from '../model/types/Currency';

interface ChoseFromCurrencyProps {
  currencyList?: CurrencyName[];
}

const reducers: ReducersList = {
  choseFromCurrency: ChoseFromCurrencyReducer,
};

export const ChoseFromCurrency = memo(
  ({ currencyList }: ChoseFromCurrencyProps) => {
    const currentCurrency = useSelector(getFromCurrentCurrency);
    const isCurMenu = useSelector(getIsFromCurMenu);

    return (
      <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
        <SearchFromCurrency
          currentCurrency={currentCurrency}
          isCurMenu={isCurMenu}
        />
        <CurrencyFromMenu currencyList={currencyList} isCurMenu={isCurMenu} />
      </DynamicReducerLoader>
    );
  },
);
