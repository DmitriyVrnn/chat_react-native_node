import { DarkTheme, DefaultTheme } from '@react-navigation/native';


export const darkCustomTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#ffd600',
    text: '#fff',
  },
};

export const defaultCustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    text: '#000',
  }
};

export const COLORS = {
  MAIN_COLOR: '#423e68',
  SECOND_COLOR: '#efb728',
};
