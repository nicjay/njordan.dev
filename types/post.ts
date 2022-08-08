import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type BasePost = {
  title: string;
  description: string;
  date: string;
  image: string;
};

export interface Post extends BasePost {
  content: MDXRemoteSerializeResult;
}

export interface ListPost extends BasePost {
  slug: string;
}
