import { memo, useMemo } from 'react';

import { RecentRate } from 'entities/recentRate';
import { CurrencyName } from 'features/choseCurrency';
import Fuse from 'fuse.js';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { getRecentRatesInputValue } from 'widgets/RecentRates/model/selectors/getAllRecentRates';

interface RecentRatesListProps {
  currencyList?: CurrencyName[];
  recentRates?: Record<string, number>;
  yesterdayRates?: Record<string, number>;
}

export const RecentRatesList = memo(
  ({ currencyList, recentRates, yesterdayRates }: RecentRatesListProps) => {
    const inputValue = useSelector(getRecentRatesInputValue);

    const searchedCurrency = useMemo(() => {
      if (currencyList && inputValue) {
        const fuse = new Fuse(currencyList, {
          keys: ['abbr', 'description'],
        });

        return fuse.search(inputValue).map((res) => res.item);
      }
      return currencyList;
    }, [currencyList, inputValue]);

    return (
      <ul>
        {searchedCurrency?.map((currency) => (
          <RecentRate
            key={v4()}
            currencyRecentRate={recentRates![currency.abbr]}
            currencyYesterdayRate={yesterdayRates![currency.abbr]}
            currencyName={currency}
          />
        ))}
      </ul>
    );
  },
);
