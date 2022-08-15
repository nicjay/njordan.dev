import { MDXRemote } from 'next-mdx-remote';
import LazyImage from '../../components/LazyImage';
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
      <div>
        <div className="font-semibold">{getLongDate(post.publishDate)}</div>
        <h1 className="pb-4 text-5xl font-bold">{post.title}</h1>
      </div>
      <div className="prose max-w-3xl pt-8 dark:prose-invert">
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
