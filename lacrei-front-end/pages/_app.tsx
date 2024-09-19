import { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Desafio Lacrei Saúde</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;