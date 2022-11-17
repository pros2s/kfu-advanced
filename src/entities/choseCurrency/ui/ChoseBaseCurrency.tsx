import { CurrencyBaseMenu } from 'features/currencyMenu';
import { SearchBaseCurrency } from 'features/searchCurrency/ui/SearchBaseCurrency';
import { memo } from 'react';

import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import {
  getBaseCurrentCurrency,
  getIsBaseCurMenu,
} from '../model/selectors/getAllBaseCurrency';
import { ChoseBaseCurrencyReducer } from '../model/slice/ChoseBaseCurrencySlice';
import { CurrencyName } from '../model/types/Currency';

interface ChoseBaseCurrencyProps {
  currencyList?: CurrencyName[];
}

const reducers: ReducersList = {
  choseBaseCurrency: ChoseBaseCurrencyReducer,
};

export const ChoseBaseCurrency = memo(
  ({ currencyList }: ChoseBaseCurrencyProps) => {
    const currentCurrency = useSelector(getBaseCurrentCurrency);
    const isCurMenu = useSelector(getIsBaseCurMenu);

    return (
      <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
        <SearchBaseCurrency
          currentCurrency={currentCurrency}
          isCurMenu={isCurMenu}
        />
        <CurrencyBaseMenu currencyList={currencyList} isCurMenu={isCurMenu} />
      </DynamicReducerLoader>
    );
  },
);
