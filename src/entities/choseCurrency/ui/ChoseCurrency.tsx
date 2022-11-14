import { memo, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextThemes } from 'shared/ui/Text/Text';
import { SearchCurrency } from 'features/SearchCurrency';
import { CurrencyMenu } from 'features/currencyMenu/ui/CurrencyMenu';
import { fetchSymbols } from '../model/services/fetchSymbols';
import {
  getCurrencyErrorMessage,
  getCurrencyIsLoading,
  getCurrencyList,
  getCurrentCurrency,
  getIsCurMenu,
} from '../model/selectors/getChoseCurrency';
import { ChooseCurrencyReducer } from '../model/slice/choseCurrencySlice';
import cls from './ChoseCurrency.module.scss';

interface ChoseCurrencyProps {
  className?: string;
}

const reducers: ReducersList = {
  chooseCurrency: ChooseCurrencyReducer,
};

export const ChoseCurrency = memo(({ className }: ChoseCurrencyProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getCurrencyIsLoading);
  const errorMessage = useSelector(getCurrencyErrorMessage);
  const currencyList = useSelector(getCurrencyList);
  const isCurMenu = useSelector(getIsCurMenu);
  const currentCurrency = useSelector(getCurrentCurrency);

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
        <SearchCurrency
          currentCurrency={currentCurrency}
          isCurMenu={isCurMenu}
        />
        <CurrencyMenu currencyList={currencyList} isCurMenu={isCurMenu} />
      </>
    );
  }

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ChoseCurrency, [className])}>
        {element}
      </div>
    </DynamicReducerLoader>
  );
});
