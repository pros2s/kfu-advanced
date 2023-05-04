import { memo, Suspense } from 'react';

import { useThemes } from 'app/providers/ThemesProvider';
import { RoutesProvieder } from 'app/providers/RoutesProvider';

import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { ConverterLink } from 'entities/converterLink';

const App = memo(() => {
  const { theme } = useThemes();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback=''>
        <nav className='navbar'>
          <div className='navbar-inner'>
            <ConverterLink />
            <div>
              <LangSwitcher />
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
        <div className='container'>
          <RoutesProvieder />
        </div>
      </Suspense>
    </div>
  );
});

export default App;
