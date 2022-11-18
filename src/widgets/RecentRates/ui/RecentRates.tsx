import { RecentRatesList } from 'features/recentRatesList';
import {
  ChoseBaseCurrency,
  ChoseBaseCurrencyActions,
  fetchSymbols,
  getBaseCurrentCurrency,
} from 'features/choseCurrency';
import { memo, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { fetchYesterdayRates } from '../model/services/fetchYesterdayRates';
import { fetchRecentRates } from '../model/services/fetchRecentRates';
import {
  getRecentRates,
  getRecentRatesInputValue,
  getRecentRatesList,
  getYesterdayRates,
} from '../model/selectors/getAllRecentRates';
import {
  ResentRatesActions,
  ResentRatesReducer,
} from '../model/slice/ResentRatesSlice';

import cls from './RecentRates.module.scss';

const reducers: ReducersList = {
  recentRates: ResentRatesReducer,
};

export const RecentRates = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const currencyList = useSelector(getRecentRatesList);
  const yesterdayRates = useSelector(getYesterdayRates);

  const recentRates = useSelector(getRecentRates);
  const currentCurrency = useSelector(getBaseCurrentCurrency);
  const inputValue = useSelector(getRecentRatesInputValue);

  useEffect(() => {
    dispatch(fetchSymbols());
    dispatch(fetchYesterdayRates({ base: currentCurrency?.abbr }));
    dispatch(fetchRecentRates({ base: currentCurrency?.abbr }));
    dispatch(ChoseBaseCurrencyActions.setDefaultBaseCurrentCurrency());
  }, [currentCurrency?.abbr, dispatch]);

  const onChangeInput = useCallback(
    (val: string) => {
      dispatch(ResentRatesActions.setInputValue(val));
    },
    [dispatch],
  );
  return (
    <DynamicReducerLoader reducers={reducers}>
      <section className='content'>
        <div className={cls.choseInput}>
          <div className={cls.header}>
            <h3 className={cls.label}>{t('searchCur')}</h3>
            <div className={classNames(cls.input, ['input'])}>
              <Input
                placeholder={t('search')}
                value={inputValue}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div>
            <h3 className={cls.label}>{t('choseBaseCurrency')}</h3>
            <ChoseBaseCurrency
              currencyList={currencyList}
              currentCurrency={currentCurrency}
            />
          </div>
        </div>
        {recentRates && (
          <RecentRatesList
            currencyList={currencyList}
            recentRates={recentRates}
            yesterdayRates={yesterdayRates}
          />
        )}
      </section>
    </DynamicReducerLoader>
  );
});
