import { memo, Suspense } from 'react';

import { useThemes } from 'app/providers/ThemesProvider';
import { RoutesProvieder } from 'app/providers/RoutesProvider';

import { classNames } from 'shared/lib/classNames/classNames';

const App = memo(() => {
  const { theme } = useThemes();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback=''>
        <div className='content-page'>
          <RoutesProvieder />
        </div>
      </Suspense>
    </div>
  );
});

export default App;
