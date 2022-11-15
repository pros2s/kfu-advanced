import { memo } from 'react';
import { CurrencyConverter } from 'widgets/CurrencyConverter';

import cls from './MainPage.module.scss';

const MainPage = memo(() => (
  <div className={cls.main}>
    <CurrencyConverter />
  </div>
));

export default MainPage;
