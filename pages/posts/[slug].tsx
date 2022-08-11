import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/future/image';
import path from 'path';
import { Post } from '../../types/post';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

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
        <div className="text-slate-600 dark:text-slate-300">{post.publishDate}</div>
        <h1 className="pb-4 text-5xl font-bold">{post.title}</h1>
      </div>
      <div className="prose max-w-3xl pt-8 dark:prose-invert">
        <MDXRemote {...post.content} components={components} />
      </div>
    </div>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath, 'utf8');

  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    parseFrontmatter: true
  });

  const post: Post = {
    content: mdxSource,
    title: mdxSource.frontmatter?.title ?? '',
    description: mdxSource.frontmatter?.description ?? '',
    publishDate: new Date(mdxSource.frontmatter?.date ?? 0).toLocaleDateString('default', {
      month: 'long',
      year: 'numeric',
      day: 'numeric'
    }),
    coverImage: mdxSource.frontmatter?.image ?? ''
  };

  return { props: { post } };
}

export async function getStaticPaths() {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
}
