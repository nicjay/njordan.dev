import type { NextPage } from 'next';
import Meta from '../components/Meta';

const Home: NextPage = () => {
  return (
    <div className="px-8">
      <Meta />
      <div className="flex flex-1 flex-col items-center justify-center py-16">
        <h1 className="text-6xl">
          Welcome to{' '}
          <a href="https://nextjs.org" className="text-blue-600 hover:underline">
            Next.js!
          </a>
        </h1>

        <p className="my-16 mx-0 text-2xl">
          Get started by editing{' '}
          <code className="rounded bg-slate-200 p-3 font-mono text-lg dark:bg-slate-700">
            pages/index.tsx
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-center">
          <a href="https://nextjs.org/docs" className="card">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className="card">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
