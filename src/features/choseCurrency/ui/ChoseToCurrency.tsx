import { memo } from 'react';

import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { SearchToCurrency } from 'entities/searchCurrency';
import { CurrencyToMenu } from 'entities/currencyMenu';
import { CurrencyName } from '../model/types/Currency';
import {
  getToCurrentCurrency,
  getIsToCurMenu,
} from '../model/selectors/getAllToCurrency';
import { ChoseToCurrencyReducer } from '../model/slice/ChoseToCurrencySlice';

interface ChoseToCurrencyProps {
  currencyList?: CurrencyName[];
}

const reducers: ReducersList = {
  choseToCurrency: ChoseToCurrencyReducer,
};

export const ChoseToCurrency = memo(
  ({ currencyList }: ChoseToCurrencyProps) => {
    const currentCurrency = useSelector(getToCurrentCurrency);
    const isCurMenu = useSelector(getIsToCurMenu);

    return (
      <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
        <SearchToCurrency
          currentCurrency={currentCurrency}
          isCurMenu={isCurMenu}
        />
        <CurrencyToMenu currencyList={currencyList} isCurMenu={isCurMenu} />
      </DynamicReducerLoader>
    );
  },
);
