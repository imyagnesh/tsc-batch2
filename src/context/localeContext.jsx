import React, { createContext, useMemo, useState } from 'react';

export const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en');

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
