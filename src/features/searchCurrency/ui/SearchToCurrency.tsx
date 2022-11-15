import { ChoseToCurrencyActions, CurrencyName } from 'entities/choseCurrency';

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
  SearchToCurrencyActions,
  SearchToCurrencyReducer,
} from '../model/slice/SearchToCurrencySlice';
import {
  getSearchToCurrencyValue,
  getSearchToIsFocused,
} from '../model/selectors/getSearchToCurrency';

import cls from './SearchCurrency.module.scss';

interface SearchToCurrencyProps {
  currentCurrency?: CurrencyName;
  isCurMenu?: boolean;
}

const reducers: ReducersList = {
  searchToCurrency: SearchToCurrencyReducer,
};

export const SearchToCurrency = memo(
  ({ currentCurrency, isCurMenu }: SearchToCurrencyProps) => {
    const dispatch = useAppDispatch();
    const isFocused = useSelector(getSearchToIsFocused);

    const value = useSelector(getSearchToCurrencyValue);

    const placeholder = useMemo(
      () => `${currentCurrency?.abbr} - ${currentCurrency?.description}`,
      [currentCurrency?.abbr, currentCurrency?.description],
    );

    const onChangeInput = useCallback(
      (val: string) => {
        dispatch(SearchToCurrencyActions.setToValue(val));
      },
      [dispatch],
    );

    const onInputClick = () => {
      dispatch(SearchToCurrencyActions.setToIsFocused(true));
      dispatch(ChoseToCurrencyActions.setIsToCurMenu(true));
    };

    const toggleCurMenu = () => {
      dispatch(SearchToCurrencyActions.setToIsFocused(!isFocused));
      dispatch(ChoseToCurrencyActions.setIsToCurMenu(!isCurMenu));
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
