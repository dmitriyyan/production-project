import { Route, Routes } from 'react-router-dom';
import { ABOUT_PATH, MAIN_PATH, NOT_FOUND_PATH } from 'shared/config/routeConfig';

import { Layout } from './Layout';
import { MainPage } from './main';
import { AboutPage } from './about';
import { NotFoundPage } from './notFound';

const pages = [
  {
    path: MAIN_PATH,
    element: <MainPage/>
  },
  {
    path: ABOUT_PATH,
    element: <AboutPage/>
  },
  {
    path: NOT_FOUND_PATH,
    element: <NotFoundPage/>
  }
];

export const Routing = () => {
  return (
    <Layout>
      <Routes>
        {pages.map(page => (
          <Route key={page.path} path={page.path} element={page.element}/>
        ))}
      </Routes>
    </Layout>
  );
};
