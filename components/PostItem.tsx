import Image from 'next/future/image';
import Link from 'next/link';
import { useState } from 'react';
import { BasePost } from '../types/post';
import { getLongDate } from '../utils/dateUtils';

export default function PostItem({ post }: { post: BasePost }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <Link
      as={`/posts/${post.slug}`}
      href={`/posts/[slug]`}
      className="group relative aspect-square overflow-hidden rounded-lg"
    >
      <Image
        src={post.coverImage}
        alt={post.title}
        fill
        sizes="20vw"
        className={`object-cover brightness-75 transition group-hover:brightness-50 ${
          isLoading ? 'blur-sm' : 'blur-none'
        }`}
        onLoadingComplete={() => setLoading(false)}
        priority
        placeholder="blur"
        blurDataURL={post.coverPlaceholder}
      />

      <div className="text-shadow relative p-4 text-white ">
        <div className="font-semibold">{getLongDate(post.publishDate)}</div>
        <div className="text-2xl font-bold">{post.title}</div>
        <div className="pt-4 opacity-0 transition group-hover:-translate-y-2 group-hover:opacity-100">
          {post.description}
        </div>
      </div>
    </Link>
  );
}
