import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import type { AppProps } from 'next/app';
import { handlePageView } from '../utils/ga';
import SeoHead from '../components/seo/SeoHead';
import '../assets/styles/main.css';
import '../assets/styles/chrome-bug.css';
import { ManagedContext } from '../context/ManagedContext';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Analytics router handling
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      handlePageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <SeoHead />
      <ManagedContext>
        <Component {...pageProps} />
      </ManagedContext>
    </>
  );
};

export default App;
