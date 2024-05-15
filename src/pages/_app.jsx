import Head from 'next/head';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>REAL AND IDEAL GAS CALCULATOR</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
