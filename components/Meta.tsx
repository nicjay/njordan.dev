import Head from 'next/head';
import { useRouter } from 'next/router';

const NAME: string = 'Nicholas Jordan';
const NAME_SHORT: string = 'Nick Jordan';
const SITE_URL: string = 'https://njordan.dev';

type MetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
  type?: 'website' | 'article'; // https://ogp.me/#no_vertical
  date?: string;
};

export default function Meta({
  title = NAME_SHORT,
  description = 'Computers are cool',
  keywords = 'blog portfolio',
  type = 'website',
  date
}: MetaProps) {
  const router = useRouter();
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={NAME} />
      <meta name="robots" content="follow, index" />

      <link rel="canonical" href={`${SITE_URL}${router.asPath}`} />

      <title>{title}</title>

      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${SITE_URL}${router.asPath}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}/images/cover.png`} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${SITE_URL}/images/cover.png`} />
      {date && <meta property="article:published_time" content={date} />}

      {type == 'article' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'BlogPosting',
              headline: title,
              description: description,
              url: `https://njordan.dev${router.asPath}`,
              author: NAME,
              datePublished: date
            })
          }}
        />
      )}
    </Head>
  );
}
