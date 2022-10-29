import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BasePost } from '../types/post';

export default function PostItem({ post }: { post: BasePost }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Link
      as={`/posts/${post.slug}`}
      href={`/posts/[slug]`}
      className="group relative aspect-square overflow-hidden rounded-lg transition hover:scale-105"
    >
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-transparent to-gray-500 opacity-10" />
      <Image
        src={post.coverImage}
        alt={post.title}
        fill
        sizes="20vw"
        className={`z-0 object-cover brightness-75 transition group-hover:scale-105 group-hover:brightness-50 ${
          isLoading ? 'blur-sm' : 'blur-none'
        }`}
        onLoadingComplete={() => setLoading(false)}
        priority
        placeholder="blur"
        blurDataURL={post.coverPlaceholder}
      />

      <div className="text-shadow relative z-10 text-white">
        <div aria-label={post.title} className="break-words p-2 text-2xl font-bold">
          {post.title}
        </div>
        <div
          aria-label={post.description}
          className="p-2 text-center text-lg font-medium opacity-100 transition group-hover:opacity-100 md:text-base md:opacity-0"
        >
          {post.description}
        </div>
      </div>
    </Link>
  );
}
