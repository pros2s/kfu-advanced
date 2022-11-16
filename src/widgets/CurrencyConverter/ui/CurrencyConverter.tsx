import {
  ChoseFromCurrency,
  ChoseFromCurrencyActions,
  ChoseToCurrency,
  ChoseToCurrencyActions,
  convert,
} from 'entities/choseCurrency';
import { KeyboardEvent, memo, ReactNode, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CgArrowsExchange } from 'react-icons/cg';

import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextThemes } from 'shared/ui/Text/Text';
import { getToCurrentCurrency } from 'entities/choseCurrency/model/selectors/getAllToCurrency';
import { getFromCurrentCurrency } from 'entities/choseCurrency/model/selectors/getAllFromCurrency';
import {
  getConverterError,
  getConverterInputValue,
  getConverterIsLoading,
  getConverterResult,
  getCurrencyList,
} from '../model/selectors/getAllCurrencyConverter';
import { fetchSymbols } from '../model/services/fetchSymbols';

import {
  CurrencyConverterActions,
  CurrencyConverterReducer,
} from '../model/slice/CurrencyConverterSlice';

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
    const inputValue = useSelector(getConverterInputValue);

    const toCurrentCur = useSelector(getToCurrentCurrency);
    const fromCurrentCur = useSelector(getFromCurrentCurrency);
    const result = useSelector(getConverterResult);

    const inputChange = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9.]/.test(event.key)) {
          event.preventDefault();
        }
      },
      [],
    );

    const onConvert = useCallback(() => {
      dispatch(
        convert({
          amount: inputValue,
          from: fromCurrentCur?.abbr,
          to: toCurrentCur?.abbr,
        }),
      );
    }, [dispatch, fromCurrentCur?.abbr, inputValue, toCurrentCur?.abbr]);

    useEffect(() => {
      dispatch(fetchSymbols());
      onConvert();
    }, [dispatch, onConvert]);

    const onChangeInput = useCallback(
      (val: string) => {
        dispatch(CurrencyConverterActions.setInputValue(val));
      },
      [dispatch],
    );

    const exchange = useCallback(() => {
      dispatch(ChoseToCurrencyActions.setToCurrentCurrency(fromCurrentCur!));
      dispatch(ChoseFromCurrencyActions.setFromCurrentCurrency(toCurrentCur!));
      onConvert();
    }, [dispatch, fromCurrentCur, onConvert, toCurrentCur]);

    let element: ReactNode;
    if (errorMessage) {
      element = (
        <Text
          align={TextAlign.CENTER}
          theme={TextThemes.ERROR}
          title={t('symbolsError')}
        />
      );
    } else {
      element = (
        <div className={cls.inner}>
          <div className={cls.tools}>
            <div className={cls.input}>
              <Input
                placeholder={t('amount')}
                value={inputValue}
                onChange={onChangeInput}
                onKeyPress={inputChange}
              />
              {isLoading && <Loader size='20px' borderWidth='4px' />}
            </div>
            <div className={cls.from}>
              <ChoseFromCurrency currencyList={currencyList} />
            </div>
            <Button
              className={cls.exchange}
              theme={ButtonThemes.CLEAR}
              onClick={exchange}
            >
              <CgArrowsExchange />
            </Button>
            <div className={cls.to}>
              <ChoseToCurrency currencyList={currencyList} />
            </div>
          </div>

          <div className={cls.result}>
            <Button theme={ButtonThemes.INVERTED_CLEAR} onClick={onConvert} />
            <h1>{result?.result}</h1>
          </div>
        </div>
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
