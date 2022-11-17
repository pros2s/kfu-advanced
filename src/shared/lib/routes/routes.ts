export enum AppRoutes {
  MAIN = 'main',
  RATES = 'rates',
  NOT_FOUND = 'notFound',
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.RATES]: '/rates',
  [AppRoutes.NOT_FOUND]: '*',
};
