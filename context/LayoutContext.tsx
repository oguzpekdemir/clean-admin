
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type LayoutType = 'vertical' | 'horizontal';
type WidthType = 'fluid' | 'boxed';
type HeaderType = 'fixed' | 'scroll';
export type ColorTheme = 'black' | 'blue' | 'purple' | 'emerald' | 'rose';

interface ThemeClasses {
    activeBg: string;
    activeText: string;
    border: string;
    ring: string;
    hoverBg: string;
    badgeBg: string;
    badgeText: string;
}

interface LayoutContextType {
  layoutType: LayoutType;
  setLayoutType: (type: LayoutType) => void;
  widthType: WidthType;
  setWidthType: (type: WidthType) => void;
  headerType: HeaderType;
  setHeaderType: (type: HeaderType) => void;
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
  themeClasses: ThemeClasses;
}

const themeDefinitions: Record<ColorTheme, ThemeClasses> = {
    black: {
        activeBg: 'bg-black dark:bg-white',
        activeText: 'text-black dark:text-white',
        border: 'border-black dark:border-white',
        ring: 'focus:ring-black dark:focus:ring-white',
        hoverBg: 'hover:bg-gray-100 dark:hover:bg-neutral-800',
        badgeBg: 'bg-gray-900',
        badgeText: 'text-white'
    },
    blue: {
        activeBg: 'bg-blue-600',
        activeText: 'text-blue-600',
        border: 'border-blue-600',
        ring: 'focus:ring-blue-600',
        hoverBg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
        badgeBg: 'bg-blue-100',
        badgeText: 'text-blue-700'
    },
    purple: {
        activeBg: 'bg-purple-600',
        activeText: 'text-purple-600',
        border: 'border-purple-600',
        ring: 'focus:ring-purple-600',
        hoverBg: 'hover:bg-purple-50 dark:hover:bg-purple-900/20',
        badgeBg: 'bg-purple-100',
        badgeText: 'text-purple-700'
    },
    emerald: {
        activeBg: 'bg-emerald-500',
        activeText: 'text-emerald-500',
        border: 'border-emerald-500',
        ring: 'focus:ring-emerald-500',
        hoverBg: 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20',
        badgeBg: 'bg-emerald-100',
        badgeText: 'text-emerald-700'
    },
    rose: {
        activeBg: 'bg-rose-500',
        activeText: 'text-rose-500',
        border: 'border-rose-500',
        ring: 'focus:ring-rose-500',
        hoverBg: 'hover:bg-rose-50 dark:hover:bg-rose-900/20',
        badgeBg: 'bg-rose-100',
        badgeText: 'text-rose-700'
    }
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [layoutType, setLayoutType] = useState<LayoutType>('vertical');
  const [widthType, setWidthType] = useState<WidthType>('fluid');
  const [headerType, setHeaderType] = useState<HeaderType>('fixed');
  const [colorTheme, setColorTheme] = useState<ColorTheme>('black');

  // Load from local storage on mount (optional simulation)
  useEffect(() => {
      const savedLayout = localStorage.getItem('cleanadmin_layout');
      if (savedLayout) {
          const parsed = JSON.parse(savedLayout);
          setLayoutType(parsed.layoutType || 'vertical');
          setWidthType(parsed.widthType || 'fluid');
          setHeaderType(parsed.headerType || 'fixed');
          setColorTheme(parsed.colorTheme || 'black');
      }
  }, []);

  // Save to local storage on change
  useEffect(() => {
      localStorage.setItem('cleanadmin_layout', JSON.stringify({ layoutType, widthType, headerType, colorTheme }));
  }, [layoutType, widthType, headerType, colorTheme]);

  const themeClasses = themeDefinitions[colorTheme];

  return (
    <LayoutContext.Provider value={{ 
        layoutType, setLayoutType, 
        widthType, setWidthType, 
        headerType, setHeaderType,
        colorTheme, setColorTheme,
        themeClasses
    }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
