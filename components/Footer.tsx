import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex h-20 flex-1 items-center justify-center border-t border-solid border-gray-300">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="flex flex-grow items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className="ml-2 h-4">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}
