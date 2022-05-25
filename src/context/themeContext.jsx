import React, { createContext, useMemo, useState } from 'react';

export const ThemeContext = createContext();

ThemeContext.displayName = 'ThemeContext';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
