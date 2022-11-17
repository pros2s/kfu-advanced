import { ChoseBaseCurrencyActions, CurrencyName } from 'entities/choseCurrency';
import { getSearchBaseCurrencyValue } from 'features/searchCurrency/model/selectors/getSearchBaseCurrency';
import { SearchBaseCurrencyActions } from 'features/searchCurrency/model/slice/SearchBaseCurrencySlice';

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

export const CurrencyBaseMenu = memo(
  ({ currencyList, isCurMenu }: CurrencyMenuProps) => {
    const dispatch = useAppDispatch();
    const searchValue = useSelector(getSearchBaseCurrencyValue);

    const setNewCurrency = (currency: CurrencyName) => {
      dispatch(ChoseBaseCurrencyActions.setBaseCurrentCurrency(currency));
      dispatch(ChoseBaseCurrencyActions.setIsBaseCurMenu(false));
      dispatch(SearchBaseCurrencyActions.setBaseIsFocused(false));
      dispatch(SearchBaseCurrencyActions.setBaseValue(''));
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
            className={classNames(cls.curName, [], {
              [cls.top]:
                cur.abbr === 'rub' || cur.abbr === 'usd' || cur.abbr === 'gbp',
            })}
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
