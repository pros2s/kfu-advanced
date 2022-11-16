import { ChoseFromCurrencyActions, CurrencyName } from 'entities/choseCurrency';

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
import {
  SearchFromCurrencyActions,
  SearchFromCurrencyReducer,
} from '../model/slice/SearchFromCurrencySlice';
import {
  getSearchFromCurrencyValue,
  getSearchFromIsFocused,
} from '../model/selectors/getSearchFromCurrency';

import cls from './SearchCurrency.module.scss';

interface SearchCurrencyProps {
  currentCurrency?: CurrencyName;
  isCurMenu?: boolean;
}

const reducers: ReducersList = {
  searchFromCurrency: SearchFromCurrencyReducer,
};

export const SearchFromCurrency = memo(
  ({ currentCurrency, isCurMenu }: SearchCurrencyProps) => {
    const dispatch = useAppDispatch();
    const isFocused = useSelector(getSearchFromIsFocused);

    const value = useSelector(getSearchFromCurrencyValue);

    const placeholder = useMemo(
      () =>
        `${currentCurrency?.abbr.toUpperCase()} - ${
          currentCurrency?.description
        }`,
      [currentCurrency?.abbr, currentCurrency?.description],
    );

    const onChangeInput = useCallback(
      (val: string) => {
        dispatch(SearchFromCurrencyActions.setFromValue(val));
      },
      [dispatch],
    );

    const onInputClick = () => {
      dispatch(SearchFromCurrencyActions.setFromIsFocused(true));
      dispatch(ChoseFromCurrencyActions.setIsFromCurMenu(true));
    };

    const toggleCurMenu = () => {
      dispatch(SearchFromCurrencyActions.setFromIsFocused(!isFocused));
      dispatch(ChoseFromCurrencyActions.setIsFromCurMenu(!isCurMenu));
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
