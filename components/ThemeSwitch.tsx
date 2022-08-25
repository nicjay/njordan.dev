import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="h-8 w-8 rounded-full bg-slate-200 ring-slate-300 transition hover:ring-2 dark:bg-slate-800"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      {mounted && (
        <>
          {theme === 'light' ? (
            <FontAwesomeIcon icon={faMoon} className="align-middle text-lg text-slate-500" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="align-middle text-lg text-orange-400" />
          )}
        </>
      )}
    </button>
  );
}
