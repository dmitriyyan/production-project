import { type PropsWithChildren } from 'react';

import { RouterProvider } from './router';
import { ThemeProvider } from './theme';

export const Providers = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider>
      <RouterProvider>
        {children}
      </RouterProvider>
    </ThemeProvider>
  );
};
