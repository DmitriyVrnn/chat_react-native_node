import { DarkTheme, DefaultTheme } from "@react-navigation/native";


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