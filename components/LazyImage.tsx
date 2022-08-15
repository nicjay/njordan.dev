import Image from 'next/future/image';
import { useState } from 'react';

type LazyImageProps = {
  src: string;
  alt: string;
  blurData: string;
  quality?: string;
  sizes?: string;
};

export default function LazyImage(props: LazyImageProps) {
  const [isLoading, setLoading] = useState(true);
  return (
    <span className="relative inline-block aspect-video w-full">
      <Image
        alt={props.alt}
        src={props.src}
        fill
        sizes="40vw"
        className={`object-cover transition dark:brightness-90 ${isLoading ? 'blur-sm' : 'blur-0'}`}
        onLoadingComplete={() => setLoading(false)}
        placeholder="blur"
        blurDataURL={props.blurData}
      />
    </span>
  );
}
