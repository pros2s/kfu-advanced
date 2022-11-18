import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { RoutesPaths } from 'shared/lib/routes/routes';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './converterLink.module.scss';

export const ConverterLink = memo(() => {
  const { pathname } = useLocation();

  const { t } = useTranslation();

  return (
    <div>
      {pathname === '/rates' && (
        <AppLink
          className={cls.converterLink}
          to={RoutesPaths.main}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('goConverter')}
        </AppLink>
      )}
    </div>
  );
});
