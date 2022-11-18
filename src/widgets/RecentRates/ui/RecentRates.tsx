import { RecentRatesList } from 'features/recentRatesList';
import {
  ChoseBaseCurrency,
  ChoseBaseCurrencyActions,
  fetchSymbols,
  getBaseCurrentCurrency,
} from 'features/choseCurrency';
import { memo, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { fetchRecentRates } from '../model/services/fetchRecentRates';
import {
  getRecentRates,
  getRecentRatesDate,
  getRecentRatesInputValue,
  getRecentRatesList,
  getYesterDayRates,
} from '../model/selectors/getAllRecentRates';
import { ResentRatesActions } from '../model/slice/ResentRatesSlice';

import cls from './RecentRates.module.scss';
import { fetchYesterdayRates } from '../model/services/fetchYesterdayRates';

export const RecentRates = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const currencyList = useSelector(getRecentRatesList);
  const recentRates = useSelector(getRecentRates);
  const yesterdayRates = useSelector(getYesterDayRates);
  const recentRatesDate = useSelector(getRecentRatesDate);

  const currentCurrency = useSelector(getBaseCurrentCurrency);
  const inputValue = useSelector(getRecentRatesInputValue);

  useEffect(() => {
    dispatch(fetchSymbols());
    dispatch(ChoseBaseCurrencyActions.setDefaultBaseCurrentCurrency());

    dispatch(fetchRecentRates({ base: currentCurrency?.abbr }));
    dispatch(
      fetchYesterdayRates({
        base: currentCurrency?.abbr,
        date: recentRatesDate,
      }),
    );
  }, [currentCurrency?.abbr, dispatch, recentRatesDate]);

  const onChangeInput = useCallback(
    (val: string) => {
      dispatch(ResentRatesActions.setInputValue(val));
    },
    [dispatch],
  );
  return (
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
      <RecentRatesList
        currencyList={currencyList}
        recentRates={recentRates}
        yesterdayRates={yesterdayRates}
      />
    </section>
  );
});
