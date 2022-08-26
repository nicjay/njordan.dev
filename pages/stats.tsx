import { InferGetStaticPropsType } from 'next';
import Meta from '../components/Meta';
import { getBuildInfo } from '../utils/buildInfo';

const REPO_BASE_URL = 'https://github.com/nicjay/nextjs-starter/commit/';

export default function Stats({ buildInfo }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Meta title="Stats | Nick Jordan" description="Site statistics and neat data." />
      <h1 className="text-3xl">Statistics</h1>
      <p className="py-4 text-3xl">🚧🚧🚧</p>
      <div className="flex flex-row justify-between rounded-lg border-2 border-neutral-500 p-4">
        <span className="font-bold">Latest build: </span>
        <time dateTime={buildInfo.time.raw}>{buildInfo.time.formatted}</time>
        <a href={`${REPO_BASE_URL}${buildInfo.hash}`}>{buildInfo.hash}</a>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const buildInfo = getBuildInfo();
  return {
    props: { buildInfo }
  };
}
