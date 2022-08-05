import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="mx-auto flex h-20 max-w-4xl items-center justify-between gap-2">
      <div className="text-sm">Copyright © 2022 Next.js User</div>
      <div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="p-2 transition hover:scale-110 hover:text-slate-500"
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
            icon={faLinkedin}
            className="p-2 transition hover:scale-110  hover:text-blue-500"
            size="2x"
          />
        </a>
        <a href="mailto:test@gmail.com" aria-label="Email">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="p-2 transition hover:scale-110 hover:text-red-500"
            size="2x"
          />
        </a>
      </div>
    </footer>
  );
}
