import { type PropsWithChildren, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const RouterProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterProvider;
