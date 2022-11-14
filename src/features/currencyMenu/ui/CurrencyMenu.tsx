import { ChooseCurrencyActions, CurrencyName } from 'entities/choseCurrency';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonThemes } from 'shared/ui/Button/Button';

import cls from './CurrencyMenu.module.scss';

interface CurrencyMenuProps {
  currencyList?: CurrencyName[];
  isCurMenu?: boolean;
}

export const CurrencyMenu = memo(
  ({ currencyList, isCurMenu }: CurrencyMenuProps) => {
    const dispatch = useAppDispatch();

    const setNewCurrency = (currency: CurrencyName) => {
      dispatch(ChooseCurrencyActions.setCurrentCurrency(currency));
      dispatch(ChooseCurrencyActions.setIsCurMenu(false));
    };

    return (
      <div className={classNames(cls.curList, [], { [cls.shown]: isCurMenu })}>
        {currencyList?.map((cur) => (
          <Button
            className={cls.curName}
            key={cur.abbr + cur.description}
            onClick={() => setNewCurrency(cur)}
            theme={ButtonThemes.CLEAR}
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
