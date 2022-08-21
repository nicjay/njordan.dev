import { GetServerSideProps } from 'next';
import { postFileSlugs } from '../utils/mdxUtils';

export default function SiteMap() {}

function generateSiteMap(pages: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        return `
            <url>
                <loc>${`https://njordan.dev/${page}`}</loc>
            </url>`;
      })
      .join('')}
    </urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const pages = [
    ...['', 'posts', 'stats', 'about'],
    ...postFileSlugs.map((slug) => `posts/${slug}`)
  ];

  res.setHeader('Content-Type', 'text/xml');
  res.write(generateSiteMap(pages));
  res.end();

  return {
    props: {}
  };
};
