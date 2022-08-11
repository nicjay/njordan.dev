import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/future/image';
import { Post } from '../../types/post';
import { getLongDate } from '../../utils/dateUtils';
import { getMdx, postFileSlugs } from '../../utils/mdxUtils';

const components = {
  img: (props: any) => (
    <span className="relative inline-block aspect-video w-full">
      <Image
        alt={props.alt}
        {...props}
        fill
        sizes="40vw"
        className="object-cover dark:brightness-90"
      />
    </span>
  )
};

export default function PostPage({ post }: { post: Post }) {
  return (
    <div>
      <div>
        <div className="text-slate-600 dark:text-slate-300">{getLongDate(post.publishDate)}</div>
        <h1 className="pb-4 text-5xl font-bold">{post.title}</h1>
      </div>
      <div className="prose max-w-3xl pt-8 dark:prose-invert">
        <MDXRemote {...post.content} components={components} />
      </div>
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
