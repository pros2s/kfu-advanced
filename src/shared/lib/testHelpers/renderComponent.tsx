import { ReactNode } from 'react';

import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { MemoryRouter } from 'react-router-dom';

interface RenderComponentOptions {
  route?: string;
  preloadedState?: DeepPartial<StateSchema>;
}

export const renderComponent = (
  component: ReactNode,
  { route = '/', preloadedState }: RenderComponentOptions = {},
) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider preloadedState={preloadedState}>{component}</StoreProvider>
    </MemoryRouter>,
  );
