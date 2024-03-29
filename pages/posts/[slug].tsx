import { MDXRemote } from 'next-mdx-remote';
import LazyImage from '../../components/LazyImage';
import Meta from '../../components/Meta';
import ScrollTop from '../../components/ScrollTop';
import { Post } from '../../types/post';
import { getLongDate } from '../../utils/dateUtils';
import { getMdx, postFileSlugs } from '../../utils/mdxUtils';

const components = {
  LazyImage
};

export default function PostPage({ post }: { post: Post }) {
  return (
    <div>
      <Meta
        title={post.title + ' | Nick Jordan'}
        description={post.description}
        date={new Date(post.publishDate).toISOString()}
        type="article"
      />
      <div>
        <div className="font-semibold">{getLongDate(post.publishDate)}</div>
        <h1 className="py-4 text-5xl font-bold text-emerald-700 dark:text-orange-400">
          {post.title}
        </h1>
      </div>
      <div className="prose max-w-3xl pt-8 prose-headings:text-emerald-700 prose-img:m-0 dark:prose-invert dark:prose-headings:text-orange-400">
        <MDXRemote {...post.content} components={components} />
      </div>
      <ScrollTop />
    </div>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const mdxSource = await getMdx(params.slug);

  const post: Post = {
    slug: params.slug,
    content: mdxSource,
    title: mdxSource.frontmatter?.title ?? '',
    description: mdxSource.frontmatter?.description ?? '',
    publishDate: mdxSource.frontmatter?.date ?? '',
    coverImage: mdxSource.frontmatter?.image ?? ''
  };

  return { props: { post } };
}

export async function getStaticPaths() {
  const paths = postFileSlugs
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
}
