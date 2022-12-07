import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { getPlaiceholder } from 'plaiceholder';
import Meta from '../components/Meta';
import { BasePost } from '../types/post';
import { getLongDate } from '../utils/dateUtils';
import { getMdxFrontmatter, postFileSlugs } from '../utils/mdxUtils';

export default function PostsPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Meta title="Posts | Nick Jordan" description="My Posts" />
      <h1 className="text-3xl">Not a Blog</h1>
      <p className="py-4 text-3xl">🚧🚧🚧</p>
      <div className="flex flex-col gap-4 py-4">
        {posts.map((post: BasePost) => (
          <Link
            as={`/posts/${post.slug}`}
            href={`/posts/[slug]`}
            key={post.slug}
            className="group flex flex-wrap items-center gap-4 rounded-lg border-2 border-neutral-500 p-4"
          >
            <div className="w-full sm:w-32">{getLongDate(post.publishDate)}</div>
            <div>
              <h2 className="text-lg font-bold text-emerald-700 dark:text-orange-400">
                {post.title}
              </h2>
              <div aria-label={post.description}>{post.description}</div>
            </div>
          </Link>
        ))}
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
  //posts = posts.slice(0, 3);

  return { props: { posts } };
}
