import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <nav className="mx-auto flex h-10 w-full max-w-4xl items-center justify-end gap-8 pt-4">
      <Link href="/">
        <a className="text-gray-500 transition hover:text-gray-600">Home</a>
      </Link>
      <Link href="/stats">
        <a className="text-gray-500 transition hover:text-gray-600">Stats</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-500 transition hover:text-gray-600">About</a>
      </Link>
      <ThemeSwitch />
    </nav>
  );
}
