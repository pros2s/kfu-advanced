import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface RecentRatesProps {
  className?: string;
}

export const RecentRates = memo(({ className }: RecentRatesProps) => {
  const { t } = useTranslation();

  return <section className='content'>recent rates</section>;
});
