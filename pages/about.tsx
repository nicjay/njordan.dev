import { NextPage } from 'next';
import Meta from '../components/Meta';

const About: NextPage = () => {
  return (
    <div>
      <Meta title="About | Nick Jordan" description="About me." />
      <h1 className="text-6xl">About Page</h1>
    </div>
  );
};

export default About;
