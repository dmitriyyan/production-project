import { FC, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

function getDefaultTheme() {
  const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

  if (defaultTheme === Theme.DARK || defaultTheme === Theme.LIGHT) {
    return defaultTheme;
  }

  return Theme.LIGHT;
}


const ThemeContextProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(getDefaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }, [])

  const defaultValue = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme])


  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider