import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between">
      <div className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Nicholas Jordan
      </div>
      <nav className="flex gap-1">
        <a href="https://github.com/nicjay" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FontAwesomeIcon
            icon={faGithub}
            className="p-2 text-2xl text-gray-600 transition hover:text-black dark:text-gray-400 hover:dark:text-white"
          />
        </a>
        <a
          href="https://linkedin.com/in/n-jordan/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="p-2 text-2xl text-gray-600 transition hover:text-blue-600 dark:text-gray-400 hover:dark:text-blue-600"
          />
        </a>
        <a
          href="https://twitter.com/nicjaydev"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="p-2 text-2xl text-gray-600 transition hover:text-blue-400 dark:text-gray-400 hover:dark:text-blue-400"
          />
        </a>
      </nav>
    </footer>
  );
}
