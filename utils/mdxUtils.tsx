import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts');

// postFileSlugs is the list of all mdx files inside the POSTS_PATH directory
export const postFileSlugs = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))
  // Remove extension
  .map((path) => path.replace(/\.mdx?$/, ''));

export async function getMdx(slug: string) {
  const source = fs.readFileSync(path.join(POSTS_PATH, slug + '.mdx'), 'utf8');

  return await serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    parseFrontmatter: true
  });
}

export async function getMdxFrontmatter(slug: string) {
  const source = fs.readFileSync(path.join(POSTS_PATH, slug + '.mdx'), 'utf8');

  const result = await serialize(source, {
    parseFrontmatter: true
  });

  return result.frontmatter;
}
