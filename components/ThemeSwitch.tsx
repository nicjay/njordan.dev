import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="h-9 w-9 rounded-full bg-gray-200 ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      {mounted && (
        <>
          {theme === 'light' ? (
            <FontAwesomeIcon
              icon={faMoon}
              size="lg"
              className="text-purple-900"
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              size="lg"
              className="text-orange-400"
            />
          )}
        </>
      )}
    </button>
  );
};

export default ThemeSwitch;
