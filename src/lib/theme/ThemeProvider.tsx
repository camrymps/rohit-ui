import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { windows98Theme, rohitSpecialTheme } from './theme';
import type { RohitUITheme } from './theme';

interface ThemeContextType {
  theme: RohitUITheme;
  setTheme: (theme: RohitUITheme) => void;
  availableThemes: RohitUITheme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: RohitUITheme;
}

export const RohitThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  initialTheme = windows98Theme 
}) => {
  const [theme, setTheme] = useState<RohitUITheme>(initialTheme);
  
  const availableThemes = [windows98Theme, rohitSpecialTheme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useRohitTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useRohitTheme must be used within a RohitThemeProvider');
  }
  return context;
}; 