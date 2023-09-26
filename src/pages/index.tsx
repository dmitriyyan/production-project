import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ABOUT_PATH, MAIN_PATH } from 'shared/config/routeConfig';
import { AboutPage } from './about';
import { MainPage } from './main';

const pages = [
  {
    path: MAIN_PATH,
    element: <MainPage/>
  },
  {
    path: ABOUT_PATH,
    element: <AboutPage/>
  },
]

export const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {pages.map(page => (
          <Route key={page.path} path={page.path} element={page.element}/>
        ))}
      </Routes>
    </Suspense>
  );
}
