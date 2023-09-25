import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextProps = {
  theme?: Theme,
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.LIGHT, toggleTheme: () => {} });

export const LOCAL_STORAGE_THEME_KEY = 'theme';