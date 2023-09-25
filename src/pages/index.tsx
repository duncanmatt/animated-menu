import Head from 'next/head';
import Layout from '@/components/Layout';

const Home = () => {
  return (
    <>
      <Head>
        <title>Animated Menu</title>
        <meta
          name='description'
          content='how to create an immersive navigation menu with css transitions'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div style={{ height: '20rem' }}></div>
        <h1 style={{ color: '#fff', textAlign: 'center' }}>
          Attaching layout to page
        </h1>
        <div style={{ height: '100vh' }}></div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
