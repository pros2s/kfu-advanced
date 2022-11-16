import {
  ChoseFromCurrency,
  ChoseFromCurrencyActions,
  ChoseToCurrency,
  ChoseToCurrencyActions,
} from 'entities/choseCurrency';
import {
  KeyboardEvent,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CgArrowsExchange } from 'react-icons/cg';

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
import { fetchRate } from 'entities/choseCurrency/model/services/fetchRate';
import {
  getConverterError,
  getConverterInputValue,
  getConverterIsLoading,
  getConverterRate,
  getCurrencyList,
} from '../model/selectors/getAllCurrencyConverter';
import { fetchSymbols } from '../model/services/fetchSymbols';

import {
  CurrencyConverterActions,
  CurrencyConverterReducer,
} from '../model/slice/CurrencyConverterSlice';

import cls from './CurrencyConverter.module.scss';

const reducers: ReducersList = {
  currencyConverter: CurrencyConverterReducer,
};

export const CurrencyConverter = memo(() => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [result, setResult] = useState(0);

  const currencyList = useSelector(getCurrencyList);
  const errorMessage = useSelector(getConverterError);
  const isLoading = useSelector(getConverterIsLoading);
  const inputValue = useSelector(getConverterInputValue);

  const toCurrentCur = useSelector(getToCurrentCurrency);
  const fromCurrentCur = useSelector(getFromCurrentCurrency);
  const rate = useSelector(getConverterRate);

  const inputChange = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9.]/.test(event.key)) {
      event.preventDefault();
    }
  }, []);

  const onConvert = useCallback(() => {
    if (inputValue !== '' && rate) {
      setResult(Number(inputValue) * rate);
    }
  }, [inputValue, rate]);

  useEffect(() => {
    dispatch(fetchSymbols());
  }, [dispatch]);

  useEffect(() => {
    onConvert();

    if (fromCurrentCur?.abbr && toCurrentCur?.abbr) {
      dispatch(
        fetchRate({ from: fromCurrentCur?.abbr, to: toCurrentCur?.abbr }),
      );
    }
  }, [dispatch, fromCurrentCur?.abbr, onConvert, toCurrentCur?.abbr]);

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
          <h3>{`${inputValue} ${fromCurrentCur?.description}s =`}</h3>
          <h1>{`${result.toFixed(2)} ${toCurrentCur?.description}s`}</h1>
          <p>{`1.00 ${fromCurrentCur?.abbr.toUpperCase()} = ${result.toFixed(2)} ${
            toCurrentCur?.abbr.toUpperCase()
          }`}</p>
        </div>
      </div>
    );
  }

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <section className={cls.CurrencyConverter}>{element}</section>
    </DynamicReducerLoader>
  );
});
