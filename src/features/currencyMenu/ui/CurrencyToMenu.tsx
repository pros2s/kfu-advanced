import {
  ChoseToCurrencyActions,
  convert,
  CurrencyName,
  getFromCurrentCurrency,
  getToCurrentCurrency,
} from 'entities/choseCurrency';
import {
  getSearchToCurrencyValue,
  SearchToCurrencyActions,
} from 'features/searchCurrency';
import Fuse from 'fuse.js';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';
import { getConverterInputValue } from 'widgets/CurrencyConverter/model/selectors/getAllCurrencyConverter';

import cls from './CurrencyMenu.module.scss';

interface CurrencyMenuProps {
  currencyList?: CurrencyName[];
  isCurMenu?: boolean;
}

export const CurrencyToMenu = memo(
  ({ currencyList, isCurMenu }: CurrencyMenuProps) => {
    const dispatch = useAppDispatch();
    const searchValue = useSelector(getSearchToCurrencyValue);
    const inputValue = useSelector(getConverterInputValue);

    const toCurrentCur = useSelector(getToCurrentCurrency);
    const fromCurrentCur = useSelector(getFromCurrentCurrency);

    const setNewCurrency = (currency: CurrencyName) => {
      dispatch(ChoseToCurrencyActions.setToCurrentCurrency(currency));
      dispatch(ChoseToCurrencyActions.setIsToCurMenu(false));
      dispatch(SearchToCurrencyActions.setToIsFocused(false));
      dispatch(SearchToCurrencyActions.setToValue(''));
      dispatch(
        convert({
          amount: inputValue,
          from: fromCurrentCur?.abbr,
          to: toCurrentCur?.abbr,
        }),
      );
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
            <p className={cls.abbr}>{cur.abbr}</p>
            <span>-</span>
            <p className={cls.description}>{cur.description}</p>
          </Button>
        ))}
      </div>
    );
  },
);
