import { type PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

const RouterProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

export default RouterProvider;
