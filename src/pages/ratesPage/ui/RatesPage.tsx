import { memo } from 'react';
import { RecentRates } from 'widgets/RecentRates';

import cls from './RatesPage.module.scss';

const RatesPage = memo(() => (
  <div className={cls.RatesPage}>
    <RecentRates />
  </div>
));

export default RatesPage;
