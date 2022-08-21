import { NextPage } from 'next';
import Meta from '../components/Meta';

const Stats: NextPage = () => {
  return (
    <div>
      <Meta title="Stats | Nick Jordan" description="Site statistics and neat data." />
      <h1 className="text-6xl">Stats Page</h1>
    </div>
  );
};

export default Stats;
