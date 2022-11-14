import { ChooseCurrencyActions, CurrencyName } from 'entities/choseCurrency';

import { memo, useCallback, useMemo } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonSizes, ButtonThemes } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { SearchCurrencyActions } from '../model/slice/searchCurrencySlice';
import { getSearchCurrencyValue } from '../model/selectors/getSearchCurrency';

import cls from './SearchCurrency.module.scss';

interface SearchCurrencyProps {
  currentCurrency?: CurrencyName;
  isCurMenu?: boolean;
}

export const SearchCurrency = memo(
  ({ currentCurrency, isCurMenu }: SearchCurrencyProps) => {
    const dispatch = useAppDispatch();

    const value = useSelector(getSearchCurrencyValue);

    const placeholder = useMemo(
      () => `${currentCurrency?.abbr} - ${currentCurrency?.description}`,
      [currentCurrency?.abbr, currentCurrency?.description],
    );

    const onChangeInput = useCallback(
      (val: string) => {
        dispatch(ChooseCurrencyActions.setIsCurMenu(true));
        dispatch(SearchCurrencyActions.setValue(val));
      },
      [dispatch],
    );

    const toggleCurMenu = () => {
      dispatch(ChooseCurrencyActions.setIsCurMenu(!isCurMenu));
    };

    return (
      <div className={cls.SearchCurrency}>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChangeInput}
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
