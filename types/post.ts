import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type BasePost = {
  title: string;
  description: string;
  publishDate: string;
  coverImage: string;
};

export interface Post extends BasePost {
  content: MDXRemoteSerializeResult;
}

export interface ListPost extends BasePost {
  slug: string;
}
