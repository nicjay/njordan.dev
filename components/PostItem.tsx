import Image from 'next/future/image';
import Link from 'next/link';
import { ListPost } from '../types/post';

export default function PostItem({ post }: { post: ListPost }) {
  return (
    <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
      <a className="group relative aspect-square">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="10vw"
          quality={50}
          className="rounded-lg object-cover brightness-75 transition group-hover:brightness-50"
          priority
        />
        <div className="absolute p-4 text-white">
          <div className="">{post.publishDate}</div>
          <div className="text-3xl font-bold ">{post.title}</div>
          <div className="pt-4 opacity-0 transition group-hover:-translate-y-2 group-hover:opacity-100">
            {post.description}
          </div>
        </div>
      </a>
    </Link>
  );
}
