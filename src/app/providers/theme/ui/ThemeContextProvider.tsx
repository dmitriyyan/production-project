import { type PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from '../lib/themeContext';

function getDefaultTheme () {
  const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

  if (defaultTheme === THEME.DARK || defaultTheme === THEME.LIGHT) {
    return defaultTheme;
  }

  return THEME.LIGHT;
}

const ThemeContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [theme, setTheme] = useState<THEME>(getDefaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
  }, []);

  const defaultValue = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
