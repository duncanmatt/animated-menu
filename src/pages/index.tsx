import Head from 'next/head';
import Layout from '@/components/Layout';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Animated Menu Tutorial</title>
        <meta
          name='description'
          content='how to create an immersive navigation menu with css transitions'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <main className={`${styles.main} ${inter.className}`}>Home</main>
      </Layout>
    </>
  );
}
