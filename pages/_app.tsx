import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next'
import '../styles/globals.css'
import { AppProps } from 'next/app';

type NextPageWithLaout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLaout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || (page => page);

  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
