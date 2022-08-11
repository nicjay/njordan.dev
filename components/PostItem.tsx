import Image from 'next/future/image';
import Link from 'next/link';
import { BasePost } from '../types/post';
import { getLongDate } from '../utils/dateUtils';

export default function PostItem({ post }: { post: BasePost }) {
  return (
    <Link
      as={`/posts/${post.slug}`}
      href={`/posts/[slug]`}
      className="group relative aspect-square"
    >
      <Image
        src={post.coverImage}
        alt={post.title}
        fill
        sizes="20vw"
        className="rounded-lg object-cover brightness-75 transition group-hover:brightness-50"
        priority
      />
      <div className="relative p-4 text-slate-100">
        <div>{getLongDate(post.publishDate)}</div>
        <div className="text-3xl font-bold drop-shadow-2xl">{post.title}</div>
        <div className="pt-4 opacity-0 transition group-hover:-translate-y-2 group-hover:opacity-100">
          {post.description}
        </div>
      </div>
    </Link>
  );
}
