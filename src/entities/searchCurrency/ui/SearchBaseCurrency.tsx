import { ChoseBaseCurrencyActions, CurrencyName } from 'features/choseCurrency';

import { memo, useCallback, useMemo } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonSizes, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

import cls from './SearchCurrency.module.scss';
import {
  SearchBaseCurrencyActions,
  SearchBaseCurrencyReducer,
} from '../model/slice/SearchBaseCurrencySlice';
import {
  getSearchBaseCurrencyValue,
  getSearchBaseIsFocused,
} from '../model/selectors/getSearchBaseCurrency';

interface SearchCurrencyProps {
  currentCurrency?: CurrencyName;
  isCurMenu?: boolean;
}

const reducers: ReducersList = {
  searchBaseCurrency: SearchBaseCurrencyReducer,
};

export const SearchBaseCurrency = memo(
  ({ currentCurrency, isCurMenu }: SearchCurrencyProps) => {
    const dispatch = useAppDispatch();
    const isFocused = useSelector(getSearchBaseIsFocused);

    const value = useSelector(getSearchBaseCurrencyValue);

    const placeholder = useMemo(
      () =>
        `${currentCurrency?.abbr.toUpperCase()} - ${
          currentCurrency?.description
        }`,
      [currentCurrency?.abbr, currentCurrency?.description],
    );

    const onChangeInput = useCallback(
      (val: string) => {
        dispatch(SearchBaseCurrencyActions.setBaseValue(val));
      },
      [dispatch],
    );

    const onInputClick = () => {
      dispatch(SearchBaseCurrencyActions.setBaseIsFocused(true));
      dispatch(ChoseBaseCurrencyActions.setIsBaseCurMenu(true));
    };

    const toggleCurMenu = () => {
      dispatch(SearchBaseCurrencyActions.setBaseIsFocused(!isFocused));
      dispatch(ChoseBaseCurrencyActions.setIsBaseCurMenu(!isCurMenu));
    };

    return (
      <DynamicReducerLoader removeAfterUnmount reducers={reducers}>
        <div
          className={classNames(cls.searchCurrency, [], {
            [cls.focused]: isFocused,
          })}
        >
          <Input
            placeholder={placeholder}
            value={value}
            onChange={onChangeInput}
            onClick={onInputClick}
          />
          <Button
            className={classNames(cls.button, [], { [cls.rotate]: isCurMenu })}
            theme={ButtonThemes.CLEAR}
            size={ButtonSizes.S}
            onClick={toggleCurMenu}
          >
            <BsCaretDownFill />
          </Button>
        </div>
      </DynamicReducerLoader>
    );
  },
);
