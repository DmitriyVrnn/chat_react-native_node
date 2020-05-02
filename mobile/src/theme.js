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
  SECOND_COLOR: '#039be5',
  YELLOW_COLOR: '#f7cd37',
  BLUE_COLOR: '#039be5',
  DARKEN_COLOR: '#282524'
};
