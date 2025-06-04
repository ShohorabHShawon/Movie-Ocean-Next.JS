'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <MdLightMode
          onClick={() => setTheme('light')}
          className="text-xl cursor-pointer text-[#ff6347] hover:text-white transition-colors duration-300"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme('dark')}
          className="text-xl cursor-pointer text-[#ff6347] hover:text-black transition-colors duration-300"
        />
      )}
    </div>
  );
}
