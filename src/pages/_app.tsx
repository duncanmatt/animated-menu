import { NextPage } from 'next';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  const pageContent = getLayout(<Component {...pageProps} />);

  return pageContent;
};

export default App;
