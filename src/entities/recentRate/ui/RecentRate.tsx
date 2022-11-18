import { CurrencyName, getBaseCurrentCurrency } from 'features/choseCurrency';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './RecentRate.module.scss';

interface RecentRateProps {
  currencyRecentRate: number;
  currencyYesterdayRate: number;
  currencyName: CurrencyName;
}

export const RecentRate = memo(
  ({
    currencyRecentRate,
    currencyName,
    currencyYesterdayRate,
  }: RecentRateProps) => {
    const { t } = useTranslation();
    const baseCurrency = useSelector(getBaseCurrentCurrency);

    const differenceRates = useMemo(
      () =>
        ((currencyRecentRate - currencyYesterdayRate) / currencyYesterdayRate) *
        100,
      [currencyRecentRate, currencyYesterdayRate],
    );

    return (
      <li
        className={classNames(cls.RecentRate, [], {
          [cls.top]:
            currencyName.abbr === 'rub' ||
            currencyName.abbr === 'eur' ||
            currencyName.abbr === 'usd' ||
            currencyName.abbr === 'gbp',
        })}
      >
        <div className={cls.first}>
          <p>{`${currencyName.description}`}</p>
          <span> {currencyName.abbr.toUpperCase()}</span>
        </div>
        <p
          className={classNames(cls.second, [], {
            [cls.positive]: differenceRates >= 0,
            [cls.negative]: differenceRates < 0,
          })}
          data-text={t('rateOfChangePerDay')}
        >
          {`${differenceRates >= 0 ? '+' : ''}${differenceRates.toFixed(2)}%`}
        </p>
        <p className={cls.third}>
          {`${(1 / currencyRecentRate).toFixed(
            2,
          )} ${baseCurrency?.abbr.toUpperCase()}`}
        </p>
      </li>
    );
  },
);
