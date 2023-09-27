import { useContext, useEffect } from 'react';

import { ThemeContext, LOCAL_STORAGE_THEME_KEY } from './themeContext';

const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  return {
    theme, toggleTheme
  } as const;
};

export default useTheme;
