import { createContext, useState, useContext } from 'react';

// 1. Create the context
export const ThemeContext = createContext();

// 2. Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme]= useState('light');

  const toggleTheme = () =>
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);