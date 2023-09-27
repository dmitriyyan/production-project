import { type PropsWithChildren } from 'react';
import { ErrorBoundary } from './errorBoundary';

import { RouterProvider } from './router';
import { ThemeProvider } from './theme';

type ProvidersProps = PropsWithChildren<unknown>;

export const Providers = ({ children } : ProvidersProps)  => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <RouterProvider>
          {children}
        </RouterProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
