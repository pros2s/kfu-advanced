import { ChooseCurrencyActions, CurrencyName } from 'entities/choseCurrency';

import { memo, useCallback, useMemo } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonSizes, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { SearchCurrencyActions } from '../model/slice/searchCurrencySlice';
import {
  getSearchCurrencyValue,
  getSearchIsFocused,
} from '../model/selectors/getSearchCurrencyValue';

import cls from './SearchCurrency.module.scss';

interface SearchCurrencyProps {
  currentCurrency?: CurrencyName;
  isCurMenu?: boolean;
}

export const SearchCurrency = memo(
  ({ currentCurrency, isCurMenu }: SearchCurrencyProps) => {
    const dispatch = useAppDispatch();
    const isFocused = useSelector(getSearchIsFocused);

    const value = useSelector(getSearchCurrencyValue);

    const placeholder = useMemo(
      () => `${currentCurrency?.abbr} - ${currentCurrency?.description}`,
      [currentCurrency?.abbr, currentCurrency?.description],
    );

    const onChangeInput = useCallback(
      (val: string) => {
        dispatch(SearchCurrencyActions.setValue(val));
      },
      [dispatch],
    );

    const onInputClick = () => {
      dispatch(SearchCurrencyActions.setIsFocused(true));
      dispatch(ChooseCurrencyActions.setIsCurMenu(true));
    };

    const toggleCurMenu = () => {
      dispatch(SearchCurrencyActions.setIsFocused(!isFocused));
      dispatch(ChooseCurrencyActions.setIsCurMenu(!isCurMenu));
    };

    return (
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
    );
  },
);
