import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type BasePost = {
  title: string;
  description: string;
  publishDate: string;
  coverImage: string;
  slug: string;
};

export interface Post extends BasePost {
  content: MDXRemoteSerializeResult;
}
