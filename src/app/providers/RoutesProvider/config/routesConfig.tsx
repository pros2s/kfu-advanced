import { MainPage } from 'pages/mainPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { RatesPage } from 'pages/ratesPage';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutesPaths } from 'shared/lib/routes/routes';

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />,
  },
  [AppRoutes.RATES]: {
    path: RoutesPaths.rates,
    element: <RatesPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutesPaths.notFound,
    element: <NotFoundPage />,
  },
};
