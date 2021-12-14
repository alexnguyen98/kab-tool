import { useTheme } from 'next-themes';
import React from 'react';
import DarkMode from '../icons/DarkMode';
import LightMode from '../icons/LightMode';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isLightMode = theme === 'light';

  const handleTheme = () => setTheme(isLightMode ? 'dark' : 'light');

  return (
    <button className="flex items-center" onClick={handleTheme}>
      {isLightMode ? <DarkMode className="fill-current" /> : <LightMode className="fill-current" />}
      <span>Theme</span>
    </button>
  );
};

export default ThemeToggle;
