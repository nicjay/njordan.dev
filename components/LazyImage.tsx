import Image from 'next/image';
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
    <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
      <Image
        alt={props.alt}
        src={props.src}
        fill
        sizes="40vw"
        className={`object-cover transition dark:brightness-90 ${
          isLoading ? 'blur-sm' : 'blur-none'
        }`}
        onLoadingComplete={() => setLoading(false)}
        placeholder="blur"
        blurDataURL={props.blurData}
      />
    </div>
  );
}
