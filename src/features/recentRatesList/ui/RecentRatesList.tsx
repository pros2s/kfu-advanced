import { RecentRate } from 'entities/recentRate';
import { CurrencyName } from 'features/choseCurrency';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getRecentRatesInputValue } from 'widgets/RecentRates/model/selectors/getAllRecentRates';

import Fuse from 'fuse.js';

interface RecentRatesListProps {
  recentRates?: Record<string, number>;
  yesterdayRates?: Record<string, number>;
  currencyList?: CurrencyName[];
}

export const RecentRatesList = memo(
  ({ recentRates, currencyList, yesterdayRates }: RecentRatesListProps) => {
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
        {searchedCurrency!.map((currency) => (
          <RecentRate
            key={currency.description}
            currencyRecentRate={recentRates![currency.abbr]}
            currencyYesterdayRate={yesterdayRates![currency.abbr]}
            currencyName={currency}
          />
        ))}
      </ul>
    );
  },
);
