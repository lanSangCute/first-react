import React from 'react';
export const themes = {
    light: {
      foreground: '#000000',
      background: 'green',
    },
    dark: {
      foreground: '#ffffff',
      background: 'red',
    },
  };
  
  export const ThemeContext = React.createContext({
    theme:themes.dark, // 默认值
    toggleTheme: () => {
        console.log('red')
    },
  })