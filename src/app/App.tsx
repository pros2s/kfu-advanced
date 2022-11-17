import { memo, Suspense } from 'react';

import { useThemes } from 'app/providers/ThemesProvider';
import { RoutesProvieder } from 'app/providers/RoutesProvider';

import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

const App = memo(() => {
  const { theme } = useThemes();

  return (
    <div className={classNames('app', [theme])}>
      <div className='container'>
        <Suspense fallback=''>
          <nav className='navbar'>
            <LangSwitcher />
            <ThemeSwitcher />
          </nav>
          <div className='content-page'>
            <RoutesProvieder />
          </div>
        </Suspense>
      </div>
    </div>
  );
});

export default App;
