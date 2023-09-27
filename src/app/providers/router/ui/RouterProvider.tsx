import { type PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

type RouterProviderProps = PropsWithChildren<unknown>;

const RouterProvider = ({ children }: RouterProviderProps) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

export default RouterProvider;
