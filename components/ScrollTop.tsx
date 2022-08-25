import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function ScrollTop() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 512) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed right-8 bottom-8 transition ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <button
        aria-label="Scroll to Top"
        type="button"
        className="h-8 w-8 rounded-full bg-slate-200 ring-slate-300 transition hover:ring-2 dark:bg-slate-800"
        onClick={handleScrollTop}
      >
        <FontAwesomeIcon icon={faArrowUp} className="align-middle text-lg" />
      </button>
    </div>
  );
}
