import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { config } from '@fortawesome/fontawesome-svg-core';
import Layout from '../components/Layout';
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
