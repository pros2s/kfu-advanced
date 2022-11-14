import { memo } from 'react';
import { ChoseCurrency } from 'entities/choseCurrency';

import cls from './MainPage.module.scss';

const MainPage = memo(() => (
  <div className={cls.main}>
    <ChoseCurrency />
  </div>
));

export default MainPage;
