import { Suspense, useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';
import './styles/index.scss';



export const App = () => {
  const { theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageLazy/>}/>
          <Route path='/' element={<MainPageLazy/>} />
        </Routes>
      </Suspense>
    </div>
  )
}
