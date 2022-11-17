import { ChoseToCurrencyActions, CurrencyName } from 'features/choseCurrency';
import {
  getSearchToCurrencyValue,
  SearchToCurrencyActions,
} from 'entities/searchCurrency';
import Fuse from 'fuse.js';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';

import cls from './CurrencyMenu.module.scss';

interface CurrencyMenuProps {
  currencyList?: CurrencyName[];
  isCurMenu?: boolean;
}

export const CurrencyToMenu = memo(
  ({ currencyList, isCurMenu }: CurrencyMenuProps) => {
    const dispatch = useAppDispatch();
    const searchValue = useSelector(getSearchToCurrencyValue);

    const setNewCurrency = (currency: CurrencyName) => {
      dispatch(ChoseToCurrencyActions.setToCurrentCurrency(currency));
      dispatch(ChoseToCurrencyActions.setIsToCurMenu(false));
      dispatch(SearchToCurrencyActions.setToIsFocused(false));
      dispatch(SearchToCurrencyActions.setToValue(''));
    };

    const searchedCurrency = useMemo(() => {
      if (currencyList && searchValue) {
        const fuse = new Fuse(currencyList, {
          keys: ['abbr', 'description'],
        });

        return fuse.search(searchValue).map((res) => res.item);
      }
      return currencyList;
    }, [currencyList, searchValue]);

    return (
      <div className={classNames(cls.curList, [], { [cls.shown]: isCurMenu })}>
        {searchedCurrency?.map((cur) => (
          <Button
            className={cls.curName}
            key={cur.abbr + cur.description}
            onClick={() => setNewCurrency(cur)}
            theme={ButtonThemes.CLEAR}
            tabIndex={0}
          >
            <p className={cls.abbr}>{cur.abbr.toUpperCase()}</p>
            <span>-</span>
            <p className={cls.description}>{cur.description}</p>
          </Button>
        ))}
      </div>
    );
  },
);
