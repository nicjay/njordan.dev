import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import { getPlaiceholder } from 'plaiceholder';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts');

// postFileSlugs is the list of all mdx files inside the POSTS_PATH directory
export const postFileSlugs = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))
  // Remove extension
  .map((path) => path.replace(/\.mdx?$/, ''));

// Generates blurry placeholders for use by LazyImage blurDataURL
export async function addBlurDataAttributes(source: string) {
  const regex = /<LazyImage.*?src="(.*?)"/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(source)) !== null) {
    let url = match[1];
    const { base64 } = await getPlaiceholder(url);
    source = source.replace(match[0], match[0] + ` blurData="${base64}"`);
    regex.lastIndex++;
  }
  return source;
}

export async function getMdx(slug: string) {
  const source = fs.readFileSync(path.join(POSTS_PATH, slug + '.mdx'), 'utf8');

  const processedSource = await addBlurDataAttributes(source);

  return await serialize(processedSource, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeCodeTitles, rehypePrism]
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
