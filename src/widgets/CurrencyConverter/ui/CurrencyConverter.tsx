import { ChoseFromCurrency, ChoseToCurrency } from 'entities/choseCurrency';
import { memo, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextThemes } from 'shared/ui/Text/Text';
import {
  getConverterError,
  getConverterIsLoading,
  getCurrencyList,
} from '../model/selectors/getAllCurrencyConverter';
import { fetchSymbols } from '../model/services/fetchSymbols';

import { CurrencyConverterReducer } from '../model/slice/CurrencyConverterSlice';

import cls from './CurrencyConverter.module.scss';

interface CurrencyConverterProps {
  className?: string;
}

const reducers: ReducersList = {
  currencyConverter: CurrencyConverterReducer,
};

export const CurrencyConverter = memo(
  ({ className }: CurrencyConverterProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const currencyList = useSelector(getCurrencyList);
    const errorMessage = useSelector(getConverterError);
    const isLoading = useSelector(getConverterIsLoading);

    useEffect(() => {
      dispatch(fetchSymbols());
    }, [dispatch]);

    let element: ReactNode;
    if (isLoading) {
      element = <Loader />;
    } else if (errorMessage) {
      element = (
        <Text
          align={TextAlign.CENTER}
          theme={TextThemes.ERROR}
          title={t('symbolsError')}
        />
      );
    } else {
      element = (
        <>
          <div className={cls.amount}>
            <h3>{t('amount')}</h3>
            <Input />
          </div>
          <div className={cls.from}>
            <h3>{t('from')}</h3>
            <ChoseFromCurrency currencyList={currencyList} />
          </div>
          <div className={cls.to}>
            <h3>{t('to')}</h3>
            <ChoseToCurrency currencyList={currencyList} />
          </div>
        </>
      );
    }

    return (
      <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
        <section className={classNames(cls.CurrencyConverter, [className])}>
          {element}
        </section>
      </DynamicReducerLoader>
    );
  },
);
