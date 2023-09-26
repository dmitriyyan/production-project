import { createContext } from 'react';

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextProps = {
  theme?: THEME,
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: THEME.LIGHT, toggleTheme: () => {} });

export const LOCAL_STORAGE_THEME_KEY = 'theme';