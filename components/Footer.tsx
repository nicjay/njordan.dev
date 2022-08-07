import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between">
      <div className="text-sm">© 2022 Next.js User</div>
      <nav className="flex gap-1">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="p-2 transition hover:scale-110"
            size="2x"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="p-2 text-blue-500 transition hover:scale-110"
            size="2x"
          />
        </a>
        <a href="mailto:test@gmail.com" aria-label="Email">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="p-2 text-red-400 transition hover:scale-110"
            size="2x"
          />
        </a>
      </nav>
    </footer>
  );
}
