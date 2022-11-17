import {
  ChoseBaseCurrency,
  ChoseBaseCurrencyActions,
  fetchSymbols,
} from 'entities/choseCurrency';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getRecentRatesList } from '../model/selectors/getAllRecentRates';
import { ResentRatesReducer } from '../model/slice/ResentRatesSlice';

const reducers: ReducersList = {
  recentRates: ResentRatesReducer,
};

export const RecentRates = memo(() => {
  const dispatch = useAppDispatch();
  const currencyList = useSelector(getRecentRatesList);

  useEffect(() => {
    dispatch(fetchSymbols());
    dispatch(ChoseBaseCurrencyActions.setDefaultBaseCurrentCurrency());
  }, [dispatch]);

  return (
    <DynamicReducerLoader reducers={reducers}>
      <section className='content'>
        <ChoseBaseCurrency currencyList={currencyList} />
      </section>
    </DynamicReducerLoader>
  );
});
