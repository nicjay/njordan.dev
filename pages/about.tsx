import Image from 'next/image';
import Meta from '../components/Meta';
import profilePic from '../public/images/profile.jpg';

export default function About() {
  return (
    <div>
      <Meta title="About | Nick Jordan" description="About me." />
      <h1 className="text-3xl">About</h1>
      <p className="py-4 text-3xl">🚧🚧🚧</p>
      <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-3">
        <div className="col-span-2 flex flex-col gap-4">
          <p>
            Thanks for visiting! I'm Nick Jordan, a software engineer currently residing in the
            beautiful Pacific Northwest.
          </p>
        </div>
        <Image src={profilePic} alt="Profile" className="rounded-lg" priority placeholder="blur" />
      </div>
    </div>
  );
}
