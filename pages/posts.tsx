import { getPlaiceholder } from 'plaiceholder';
import PostItem from '../components/PostItem';
import { BasePost } from '../types/post';
import { getMdxFrontmatter, postFileSlugs } from '../utils/mdxUtils';

export default function PostsPage({ posts }: { posts: BasePost[] }) {
  return (
    <div>
      <h1 className="text-3xl">My Posts</h1>
      <p className="py-4">
        Click the link below to navigate to a page generated by <code>next-mdx-remote</code>.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post: BasePost) => (
          <PostItem key={post.slug} post={post} />
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
