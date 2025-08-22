import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type ColorTheme = 'blue' | 'green' | 'purple';

interface ThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ColorThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    const saved = localStorage.getItem('color-theme');
    return (saved as ColorTheme) || 'blue';
  });

  useEffect(() => {
    localStorage.setItem('color-theme', colorTheme);
    
    // Remove existing theme classes
    document.documentElement.classList.remove('theme-blue', 'theme-green', 'theme-purple');
    
    // Add current theme class
    document.documentElement.classList.add(`theme-${colorTheme}`);
  }, [colorTheme]);

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useColorTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useColorTheme must be used within a ColorThemeProvider');
  }
  return context;
};