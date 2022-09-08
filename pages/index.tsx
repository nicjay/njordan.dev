import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { getPlaiceholder } from 'plaiceholder';
import Meta from '../components/Meta';
import PostItem from '../components/PostItem';
import { BasePost } from '../types/post';
import { getMdxFrontmatter, postFileSlugs } from '../utils/mdxUtils';

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col gap-16 pt-32 sm:gap-32">
      <Meta />
      <div>
        <h1 className="py-4 text-4xl font-bold">
          Greetings, I'm{' '}
          <Link
            href="/about"
            className="text-emerald-700 transition duration-500 hover:underline dark:text-orange-400"
          >
            Nick.
          </Link>
        </h1>
        <ul className="space-y-2 text-lg font-medium">
          <li>📱 Frontend Developer</li>
          <li>🖥️ Backend Developer</li>
          <li>🌐 Self-Hoster</li>
          <li>🌮 Taco Enjoyer</li>
        </ul>
      </div>
      <div>
        <h2 className="py-4 text-2xl font-bold">Words</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {posts.map((post: BasePost) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
        <div className="flex justify-end">
          <Link
            href="/posts"
            className="py-4 text-2xl font-bold text-emerald-700 transition duration-500 hover:underline dark:text-orange-400"
          >
            More {'>'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let posts = await Promise.all(
    postFileSlugs.map(async (slug) => {
      const mdxFrontmatter = await getMdxFrontmatter(slug);

      const { base64 } = await getPlaiceholder(mdxFrontmatter?.image ?? '');

      const post: BasePost = {
        slug: slug,
        title: mdxFrontmatter?.title ?? '',
        description: mdxFrontmatter?.description ?? '',
        publishDate: mdxFrontmatter?.date ?? '',
        coverImage: mdxFrontmatter?.image ?? '',
        coverPlaceholder: base64
      };

      return post;
    })
  );

  // Sort newest posts first
  posts.sort(
    (a, b) => new Date(b.publishDate ?? 0).getTime() - new Date(a.publishDate ?? 0).getTime()
  );

  // Show N number of posts
  posts = posts.slice(0, 4);

  return { props: { posts } };
}
